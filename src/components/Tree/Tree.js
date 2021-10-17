import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { appleActions } from "../../store";

import classNames from "classnames";

import tree from "../../assets/tree.svg";
import Apple from "../Apple/Apple";

const Tree = () => {
  const dispatch = useDispatch();

  //Apples
  const apples = useSelector((state) => state.apples.apples);

  //Global shaking state
  const isShaking = useSelector((state) => state.apples.isShaking);

  const dropApples = () => {
    //Apples which are still on tree
    const notDroppedApples = apples.filter((apple) => !apple.isDropped);

    // Define a random animation time
    const transitionTime = Math.ceil(Math.random() * 4);

    // We reach to store in order to take some actions with apples which are still on tree
    notDroppedApples.forEach((apple, index) => {
      // Apples have a 50% chance of falling.
      const isDropped = Math.random() < 0.5;
      dispatch(
        appleActions.drop({
          id: apple.id,
          transition: `${transitionTime}s`,
          // We guarantee that everytime at least one apple gonna drop
          isDropped: index === 0 ? true : isDropped,
        })
      );

      (index === 0 || isDropped) &&
        setTimeout(() => {
          dispatch(appleActions.carry({ id: apple.id, transition: "3s" }));
        }, transitionTime * 1000 + 1000);
    });
  };

  //Shaker button triggers these actions:
  const onShakerClick = () => {
    // Whenever we click to "shaker" button, it is gonna change "isShaking" state to "true" and it will be reachable accros the components.
    dispatch(appleActions.shake(true));

    // Clears "shaking" class after 3 secs in order to able to shake again.
    setTimeout(() => {
      dispatch(appleActions.shake(false));
      dropApples();
    }, 3000);
  };

  // This action reset the states and refresh the page
  const onReseterClick = () => {
    dispatch(appleActions.reset());
  };

  // This button rendered conditionally. Depends on how many apples left on the tree.
  const renderedButton =
    apples.filter((apple) => !apple.isDropped).length > 0 ? (
      <button onClick={onShakerClick} className="button-shaker">
        Shaker
      </button>
    ) : (
      <button onClick={onReseterClick} className="button-shaker">
        Reset
      </button>
    );
  return (
    //This div is something like a special inline div which holds tree and it's apples
    <div className="tree">
      {renderedButton}
      <img
        className={classNames({
          shaking: isShaking,
        })}
        src={tree}
        alt="Tree"
      />
      {apples.map((apple) => {
        return (
          <Apple
            isShaking={isShaking}
            isDropped={apple.isDropped}
            key={apple.id}
            style={apple}
          />
        );
      })}
    </div>
  );
};

export default Tree;
