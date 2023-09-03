import React, { ReactNode, useState } from "react";
import Generator from "../components/generator/Generator";
import { Link } from "react-router-dom";
import PlaylistNode from "../components/playlist/PlaylistNode";
import {
  SearchResult,
  Song,
  PlaylistSearchResult,
  Playlist,
  SavedSong,
} from "../SpotifyInterfaces";

export default function Search() {
  const spotifyAccessToken = sessionStorage.getItem("spotify-access-token");

  return (
    <>
      <h1>Search for Songs</h1>
      {!spotifyAccessToken && <Link to="/login">Connect To Spotify!</Link>}
      <Generator />
    </>
  );
}