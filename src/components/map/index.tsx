import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import Marker from './marker'

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;
`
const GoogleMapWrapper = styled.div`
  width: 100%;
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
