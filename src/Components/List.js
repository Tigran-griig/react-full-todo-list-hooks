import React from "react";
import {TransitionGroup,CSSTransition} from "react-transition-group";
import SimpleAccordion from "./newList";

export const List = ({ lists, onDelet }) => {
  return (
      <TransitionGroup component={'ul'}  className="list-group">
      {lists.map((list) => (
          <CSSTransition
              key={list.id}
              classNames={'note'}
              timeout={800}
          >
        <li className="list-group-item note" key={list.id}>
       <SimpleAccordion  list={list.date} />
            <div>
          <strong>{list.title}</strong>
       </div>
         <button
             onClick={()=> onDelet(list.id)}
              type={"button"}
          className={'btn btn-outline-danger btn-sm'}
          >
            &times;
          </button>
        </li>
          </CSSTransition>
      ))}

      </TransitionGroup>
  );
};
