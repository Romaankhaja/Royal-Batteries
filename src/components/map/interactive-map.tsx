"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const STORE_LOCATION = { lat: 18.1489, lng: 78.6792 }; 
const STORE_NAME = "Royal Batteries - Gajwel Store";
const STORE_ADDRESS = "Main Road, Gajwel, Telangana, India";

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
          <p>Google Maps API Key is not configured correctly. Please ensure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set in your .env.local file and that your development server has been restarted.</p>
          <p className="mt-2 text-sm text-muted-foreground">If the key is set, this error might also appear if there's an issue with the key itself (e.g., invalid, restricted, or project billing issues).</p>
        </CardContent>
      </Card>
    )
  }

  // This is a general handler, specific errors are often logged by the Google Maps API itself in the console.
  const handleApiLoadError = (e: Error) => {
    console.error("Google Maps APIProvider load error:", e);
    setMapError("Failed to load Google Maps API. Please check browser console for details from Google Maps.");
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
      onLoad={() => console.log("Google Maps API Loaded via APIProvider")} // For debugging successful load
      // Attempting to catch errors at APIProvider level if possible, though specific errors usually come from Maps JS API itself.
      // Note: The @vis.gl/react-google-maps library doesn't explicitly document a top-level onError for APIProvider that catches API key/billing issues.
      // These are usually caught by the Google Maps JS API itself and logged to the console.
    >
      <div style={{ height: '500px', width: '100%' }} className="rounded-lg overflow-hidden shadow-md border">
        <Map
          defaultCenter={STORE_LOCATION}
          defaultZoom={15}
          mapId="royal-batteries-map"
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          // The Map component itself doesn't typically throw catchable errors for API key issues;
          // those prevent the API from loading in the first place.
        >
          <AdvancedMarker 
            position={STORE_LOCATION} 
            onClick={() => setInfoWindowOpen(true)}
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
