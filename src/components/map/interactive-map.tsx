"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// IMPORTANT: Replace with your actual Google Maps API key
// Store this in your .env.local file as NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY_HERE";

const STORE_LOCATION = { lat: 17.8496, lng: 78.6779 }; // Gajwel, Telangana (approximate)
const STORE_NAME = "Royal Batteries - Gajwel Store";
const STORE_ADDRESS = "Main Road, Gajwel, Telangana, India";

export function InteractiveMap() {
  const [isMounted, setIsMounted] = useState(false);
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // To prevent hydration errors with APIProvider, ensure it only renders client-side initially
    // Or, you can provide a loading state here.
    return <div className="flex items-center justify-center h-[500px] w-full bg-muted rounded-lg shadow-md"><p>Loading map...</p></div>;
  }
  
  if (API_KEY === "YOUR_GOOGLE_MAPS_API_KEY_HERE") {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Map Unavailable</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Google Maps API Key is not configured. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env.local file.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <div style={{ height: '500px', width: '100%' }} className="rounded-lg overflow-hidden shadow-md border">
        <Map
          defaultCenter={STORE_LOCATION}
          defaultZoom={15}
          mapId="royal-batteries-map"
          gestureHandling={'greedy'}
          disableDefaultUI={false}
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
