import React, { useEffect, useCallback } from "react";
import { GetServerSideProps, NextPage } from "next";
import Cookies from "js-cookie";
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";
//styles
import { VenueData } from "./types";
//component
import Seo from "@/components/common/seo/Seo";

interface Props {
  venue: {
    data: VenueData;
  };
}

const UnauthenticatedVenue = dynamic(() => import('./UnauthenticatedVenue'), {
  ssr: false, // Set ssr option to false to disable server-side rendering for the component
});

const AuthenticatedVenue = dynamic(() => import('../authenticatedVenue'), {
  ssr: false, // Set ssr option to false to disable server-side rendering for the component
});

const Venue: NextPage<Props> = ({ venue }) => {
  const router = useRouter();

  useEffect(() => {
    if (!venue?.data?._id) {
      router.push("/venue-not-found");
    }
  }, [venue?.data?._id, router]);


  const { data } = venue;


  const renderPage = useCallback(() => {
    if (data) {
      if (!Cookies.get("ACCESS_TOKEN")) {
        return (
          <>
            <UnauthenticatedVenue venue={venue} />
          </>
        );
      } else {
        return (
          <AuthenticatedVenue data={data} />
        )
      }
    }
  }, [data, UnauthenticatedVenue, venue, AuthenticatedVenue])

  if (!venue) return null;

  return (
    <>
      <Seo
        meta_title={venue?.data?.venue?.name}
        meta_image_url={venue?.data?.venue?.venue_display_picture}
        description={venue?.data?.venue?.address}
      >
        <script>
          {`window.location = "turf://demo.com?type=venue&venueGame=${venue?.data?.venue?.name}&venueId=${venue?.data?._id}"`}
        </script>
      </Seo>
      {renderPage()}
    </>
  )


};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let response: {
    status: string;
    message: string;
    data: any;
  } | null = null;
  try {
    if (!query?.path) return { props: { venue: null } };
    const res = await fetch(
      `http://devstage.turftown.in/api/v3/venue/details/${query?.path[1]}`
    );

    response = await res.json();
  } catch (error) {
    response = null;
  }

  return {
    props: {
      venue: response?.data ? response : null,
    },
  };
};

export default Venue;
