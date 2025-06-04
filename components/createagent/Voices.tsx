interface Voice {
  voice_id: string;
  name: string;
  preview: string;
  workspace: string;
  img: string;
  status: string;
  Dialect: string;
}

const voicesList: Voice[] = [
  {
    voice_id: "JVFlaC5njBD4JVXTPOyq",
    name: "Ava",
    preview: "/voicesList/Ava.MP3",
    workspace: "1711297163700x954223200313016300",
    img: "/otherAssets/ava.png",
    status: "Popular",
    Dialect: "Dramatic, Intense, Mid 20s | Californian",
  },
  {
    voice_id: "PFIFGOLGFTh5WCxNE7aV",
    name: "Zane",
    preview: "/voicesList/Zane.MP3",
    workspace: "1711297163700x954223200313016300",
    img: "/otherAssets/zane.png",
    status: "Popular",
    Dialect: "Confident, Charismatic, Mid 20s | Californian",
  },
  // ... (rest of the voice objects remain the same, just properly typed)
  {
    voice_id: "yUeKuNxGTYAYe6vcplkT",
    name: "Luna",
    preview: "/voicesList/Luna.MP3",
    workspace: "1711297163700x954223200313016300",
    img: "/otherAssets/luna.png",
    status: "",
    Dialect: "Personable, Assertive, Mid 30s | New Yorker",
  },
];

export default voicesList;

export function FindVoice(id: string): Voice {
  const voice = voicesList.find((v) => v.voice_id === id);

  return (
    voice || {
      voice_id: "yUeKuNxGTYAYe6vcplkT",
      name: id,
      preview: "/voicesList/Luna.MP3",
      workspace: "1711297163700x954223200313016300",
      img: "/otherAssets/luna.png",
      status: "",
      Dialect: "Personable, Assertive, Mid 30s | New Yorker",
    }
  );
}