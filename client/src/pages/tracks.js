import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client'
import TrackCard from "../containers/track-card";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, data, error } = useQuery(TRACKS)
  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return <Layout grid>
    {data?.tracksForHome?.map((track) => (
      <TrackCard key={track.id} track={track} />
    ))}
  </Layout>
};

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`

export default Tracks;
