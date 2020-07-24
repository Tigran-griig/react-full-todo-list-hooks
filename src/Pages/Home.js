import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../Components/Form";
import { List } from "../Components/List";
import { FirebaseContext } from "../Context/firebase/firebaseContext";
import { Loading } from "../Components/Loadung";
import FullScreenDialog from "../Components/Email";

export const Home = () => {
  const { loading, lists, fetchLists ,removeList} = useContext(FirebaseContext);
  useEffect(() => {
    fetchLists();
    //    eslint-disable-next-line
  }, []);
  return (
    <Fragment>

      <Form />
      <hr />
      {loading ? <Loading /> : <List lists={lists} onDelet={removeList} />}

        <FullScreenDialog />
    </Fragment>

  );
};
