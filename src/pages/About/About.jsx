import { chakra, Container } from "@chakra-ui/react";
export default function About() {
  return (
    <Container mt={"20px"} maxW={"8xl"} height={"600px"}>
      <chakra.h1 fontWeight={900} fontSize={{ base: "xl", md: "2xl" }}>
        About Us
      </chakra.h1>
      <chakra.p opacity={0.7} fontSize={{ base: "s", md: "s" }}>
        Published: 14 January 2022
      </chakra.p>
      <chakra.p>
        SongsLyrics.me is the one of the leading Website for Top Collections of
        Lyrics in Many Languages. We at SongsLyrics are truly committed to
        provide High quality experience to our users regarding latest Hindi,
        Punjabi songs from newly released Film and Non-Film albums lyrics. Note:
        We hold rights to delete or modify the content of this website without
        any prior written permission. For more information please reach out to
        help@songslyrics.me All the Images, Song Names, Album Names, Lyrics
        available on our website that holds its own copyright and license to
        their respective owners. Posted Song Text/ Lyrics is only for Eductional
        Purposes. Thanks
      </chakra.p>
    </Container>
  );
}
