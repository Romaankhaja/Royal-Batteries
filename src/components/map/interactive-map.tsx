
"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Coordinates from https://maps.app.goo.gl/CGc54jkMYS78BPB28
const STORE_LOCATION = { lat: 18.1489083, lng: 78.6818163 }; 
const STORE_NAME = "Royal Batteries - Exide Battery Dealer in Gajwel";
const STORE_ADDRESS = "Gajwel, Telangana 502312, India"; // Matching the marker

export function InteractiveMap() {
  const [isMounted, setIsMounted] = useState(false);
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  const [mapLoadError, setMapLoadError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);

    // Listen for Google Maps authentication errors
    const authFailureCallback = () => {
      setMapLoadError(
        "Google Maps authentication failed. This often means there's an issue with your API key configuration or billing in the Google Cloud Console. " +
        "Please verify: \n1. Billing is enabled for your project. \n2. The Maps JavaScript API is enabled for your key. \n3. API key restrictions (HTTP referrers, API services) are correctly set up."
      );
    };

    (window as any).gm_authFailure = authFailureCallback;
    
    return () => {
      // Clean up the global callback when the component unmounts
      if ((window as any).gm_authFailure === authFailureCallback) {
        delete (window as any).gm_authFailure;
      }
    };
  }, []);

  if (!isMounted) {
    return <div className="flex items-center justify-center h-[500px] w-full bg-muted rounded-lg shadow-md"><p>Loading map...</p></div>;
  }
  
  if (!API_KEY || API_KEY === "YOUR_GOOGLE_MAPS_API_KEY_HERE") {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Map Configuration Incomplete</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-destructive-foreground bg-destructive p-2 rounded-md">Local API Key Setup Required:</p>
          <ol className="list-decimal list-inside space-y-1 mt-3 text-sm">
            <li>Create or open the <code>.env.local</code> file in the root of your project.</li>
            <li>In this file, add the line: <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_ACTUAL_KEY_HERE"</code>.</li>
            <li>Replace <code>"YOUR_ACTUAL_KEY_HERE"</code> with your valid Google Maps JavaScript API key.</li>
            <li>Ensure <code>.env.local</code> is listed in your <code>.gitignore</code> file.</li>
            <li><strong>Important:</strong> Restart your development server after creating or modifying <code>.env.local</code>.</li>
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">
            If the API key is correctly set in <code>.env.local</code> (and your server restarted) but you still see map errors (like "This page can't load Google Maps correctly"), the issue is almost certainly with your API key's configuration in the Google Cloud Console. This could be:
            <ul className="list-disc list-inside mt-1">
              <li>Billing not enabled for your project (Common cause for <code>BillingNotEnabledMapError</code>).</li>
              <li>Maps JavaScript API not enabled for your key.</li>
              <li>Incorrect API key restrictions (e.g., HTTP referrers not including your development or production URLs, or API services not including Maps JavaScript API).</li>
            </ul>
            Please meticulously check your Google Cloud project settings.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (mapLoadError) {
     return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Map Loading Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-destructive-foreground bg-destructive p-2 rounded-md">Error Details:</p>
          <p className="mt-2 whitespace-pre-line">{mapLoadError}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            This often requires checking your API Key settings in the <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Google Cloud Console</a>.
            Common issues include billing problems, API not enabled, or incorrect key restrictions.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <APIProvider 
      apiKey={API_KEY} 
      solutionChannel="GMP_QB_avnomapload_v1_react"
      onLoad={() => console.log("Google Maps API Loaded via APIProvider")}
      // Note: @vis.gl/react-google-maps APIProvider doesn't have a direct onError prop.
      // Errors like BillingNotEnabled are often caught by the Google Maps SDK itself and logged,
      // or via the gm_authFailure callback handled above.
    >
      <div style={{ height: '500px', width: '100%' }} className="rounded-lg overflow-hidden shadow-md border">
        <Map
          defaultCenter={STORE_LOCATION}
          defaultZoom={17} 
          mapId="royal-batteries-map"
          gestureHandling={'greedy'}
          disableDefaultUI={false}
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
