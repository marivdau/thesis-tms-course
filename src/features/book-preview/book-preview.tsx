import { useEffect } from "react";
import { getBookPreview } from "./book-preview.slice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const BookPreview: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const { bookPreview } = useAppSelector(({ bookPreview }) => bookPreview);
  // useEffect(() => {
  //   dispatch(getBookPreview());
  // }, [dispatch]);

  return (
    <div>
      {/* text {bookPreview.authors}       */}
    </div>
  )
}
