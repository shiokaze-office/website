import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import Marker from './marker'

const Wrapper = styled.div`
  text-align: center;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 1rem;
`
const GoogleMapWrapper = styled.div`
  width: 100vw;
  height: 50vh;
`

const key = `AIzaSyCxWeezNfUlaG2bDgvDpwpf3K_hsbzk5oA`

type Props = {
  lat?: number
  lng?: number
  zoom?: number
  name?: string
}

const Component: React.FC<Props> = ({ lat, lng, zoom, name }) => (
  <Wrapper>
    <GoogleMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
      >
        <Marker text={name} lat={lat} lng={lng} />
      </GoogleMapReact>
    </GoogleMapWrapper>
  </Wrapper>
)

Component.defaultProps = {
  lat: 33.5863496,
  lng: 130.3116807,
  zoom: 15,
  name: ``,
}

export default Component
