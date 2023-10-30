import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getNewBooks } from "./new-books.slice";

export const NewBooks: React.FC = () => {
  const dispatch = useAppDispatch();
  const { newBooks } = useAppSelector(({ newBooks }) => newBooks)
  useEffect(() => {
    dispatch(getNewBooks());
  }, [dispatch])
  return (
    <div>
      total {newBooks.total}
      <div>
        error {newBooks.error}
      </div>
      {newBooks.books?.map(item => <img key={item.isbn13} src={item.url} />)}
    </div>
  )
}
