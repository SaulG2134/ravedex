import type { Genre } from "@/types";
export const GENRE_LABEL: Record<Genre, string> = {
    techno: "Techno",
    house: "House",
    trance: "Trance",
    dnb: "Drum & Bass",
    hardstyle: "Hardstyle",
    other: "Other",
}
export const GENRE_CHIP: Record<Genre, string> = {
    techno: "bg-[#0f3a45] text-techno",
  house: "bg-[#45300f] text-house",
  dnb: "bg-[#2b3d0f] text-dnb",
  trance: "bg-[#2d2050] text-trance",
  hardstyle: "bg-[#4a1a1a] text-hardstyle",
  other: "bg-[#262c3d] text-muted",
};