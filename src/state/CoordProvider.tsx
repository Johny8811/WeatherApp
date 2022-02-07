import { createContext, useContext, ReactNode, useState } from 'react';

import { Coord } from './types'

export const DEFAULT_COORDINATES = { lat: 50.068, lon: 14.434 }

type Props = {
  children: ReactNode;
}

type CoordProvider = {
  coord: Coord,
  setCoord: (data: Coord) => void
}

// TODO: improve this ugly stuff
const CoordContext = createContext<CoordProvider>({
  coord: DEFAULT_COORDINATES,
  setCoord: () => {}
});

export const CoordProvider = ({ children }: Props) => {
  const [coord, setCoord] = useState<Coord>(DEFAULT_COORDINATES)

  return (
    <CoordContext.Provider value={{ coord, setCoord }}>
      {children}
    </CoordContext.Provider>
  )
}

export const useCoord = () => {
  return useContext(CoordContext);
}
