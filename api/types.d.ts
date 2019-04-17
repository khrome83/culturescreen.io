import { v4 } from "uuid/interfaces";

declare namespace Video {
  interface Reaction {
    type: string;
    author: v4;
  }

  interface Comment {
    id: string;
    author: string;
    video: string;
    comment: string;
    date: string;
    edited: boolean;
    editedDate?: string;
    reactions?: Array<Reaction>;
  }
}
