import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../constants/general";
import { IEntryItem } from "../types/db";

const word = async (word: string): Promise<IEntryItem[] | void> => {
  try {
    const { data }: { data: IEntryItem[] } = await axios.get(
      `${baseUrl}/get/${word}`
    );
    return data;
  } catch (err) {
    Swal.fire("something went wrong");
  }
};

export { word };
