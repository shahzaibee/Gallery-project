"use client";
import React, { useEffect, useState } from "react";
import View from "./view";
import { MyImage } from "./page";

const FavouriteList = ({ resources }: { resources: MyImage[] }) => {
    
  const [initialstate, setInitialState] = useState(resources);

  useEffect(() => {
    setInitialState(resources);
  }, [resources]);

  return (
    <div className="columns-4 gap-4 space-y-4 mx-auto justify-between ">
      {initialstate.map((item, i) => {
        return (
          <div key={i} className="break-inside-avoid">
            <View
              src={item.public_id}
              tag={item.tags}
              fun={(public_id: string) => {
                setInitialState((current) =>
                  current.filter((val) => val.public_id !== public_id)
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FavouriteList;
