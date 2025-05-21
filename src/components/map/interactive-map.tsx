
"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Updated coordinates and details from the provided Google Maps link
const STORE_LOCATION = { lat: 18.1489133, lng: 78.6792414 }; 
const STORE_NAME = "Royal Batteries - Exide Battery Dealer in Gajwel";
const STORE_ADDRESS = "Gajwel, Telangana 502312, India";

export function InteractiveMap() {
  const [isMounted, setIsMounted] = useState(false);
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="flex items-center justify-center h-[500px] w-full bg-muted rounded-lg shadow-md"><p>Loading map...</p></div>;
  }
  
  if (!API_KEY || API_KEY === "YOUR_GOOGLE_MAPS_API_KEY_HERE") {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Map Configuration Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-destructive-foreground bg-destructive p-2 rounded-md">Local API Key Setup Incomplete:</p>
          <ol className="list-decimal list-inside space-y-1 mt-3 text-sm">
            <li>Ensure you have a <code>.env.local</code> file in the root of your project.</li>
            <li>In the <code>.env.local</code> file, add the line: <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_ACTUAL_KEY_HERE"</code>.</li>
            <li>Replace <code>"YOUR_ACTUAL_KEY_HERE"</code> with your valid Google Maps API key.</li>
            <li>Make sure <code>.env.local</code> is listed in your <code>.gitignore</code> file to protect your key.</li>
            <li><strong>Important:</strong> You MUST restart your development server after creating or modifying the <code>.env.local</code> file for changes to take effect.</li>
          </ol>
          <p className="mt-4 text-xs text-muted-foreground">
            If the API key is correctly set in <code>.env.local</code> (and your server restarted) but you still see map errors (like "This page can't load Google Maps correctly"), the issue is almost certainly with your API key's configuration in the Google Cloud Console. This could be:
            <ul className="list-disc list-inside mt-1">
              <li>Billing not enabled for your project.</li>
              <li>Maps JavaScript API not enabled for your key.</li>
              <li>Incorrect API key restrictions (e.g., HTTP referrers).</li>
            </ul>
            Please meticulously check your Google Cloud project settings.
          </p>
        </CardContent>
      </Card>
    )
  }

  const handleApiLoadError = (e: Error) => {
    console.error("Google Maps APIProvider load error:", e);
    // Check for common error messages from the error object if possible
    if (e.message.includes("ApiNotActivatedMapError") || e.message.includes("InvalidKeyMapError")) {
      setMapError("Google Maps API Key is invalid or the API is not activated. Please check your Google Cloud Console.");
    } else if (e.message.includes("BillingNotEnabledMapError")) {
      setMapError("Billing is not enabled for the Google Cloud project associated with your API key. Please check your Google Cloud Console.");
    } else {
      setMapError("Failed to load Google Maps API. Please check browser console for details from Google Maps.");
    }
  };

  if (mapError) {
     return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Map Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{mapError}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <APIProvider 
      apiKey={API_KEY} 
      solutionChannel="GMP_QB_avnomapload_v1_react"
      onLoad={() => console.log("Google Maps API Loaded via APIProvider")}
      // Attempting to catch more specific load errors if the library surfaces them
      // Note: onError on APIProvider might not catch all types of API key/billing issues, 
      // as those are often handled by the Maps JS API itself.
    >
      <div style={{ height: '500px', width: '100%' }} className="rounded-lg overflow-hidden shadow-md border">
        <Map
          defaultCenter={STORE_LOCATION}
          defaultZoom={17} // Slightly more zoomed in
          mapId="royal-batteries-map"
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          // The `onError` prop on the `Map` component itself is not standard for @vis.gl/react-google-maps
          // Error handling is better managed at the APIProvider level or by observing console errors.
        >
          <AdvancedMarker 
            position={STORE_LOCATION} 
            onClick={() => setInfoWindowOpen(true)}
            title={STORE_NAME}
          >
            <Pin background={'hsl(var(--primary))'} borderColor={'hsl(var(--primary-foreground))'} glyphColor={'hsl(var(--primary-foreground))'} />
          </AdvancedMarker>
          {infoWindowOpen && (
            <InfoWindow
              position={STORE_LOCATION}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <div className="p-2">
                <h3 className="font-bold text-md mb-1 text-foreground">{STORE_NAME}</h3>
                <p className="text-sm text-muted-foreground">{STORE_ADDRESS}</p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto mt-2 text-primary"
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${STORE_LOCATION.lat},${STORE_LOCATION.lng}`, "_blank")}
                >
                  Get Directions
                </Button>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

