import React, { useState } from "react";
import { FormElementInstance, FormElements } from "../form-elements";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Button } from "../ui/button";
import { BiSolidTrash } from "react-icons/bi";
import useDesigner from "../hooks/useDesigner";
import { cn } from "@/lib/utils";

const DesignerElementWrapper = ({
  element,
}: {
  element: FormElementInstance;
}) => {
  const { removeElement, selectedElement, setSelectedElement } = useDesigner();
  const [mouseIsOver, setMouseIsOver] = useState(false);

  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });

  const mouseEntered = () => {
    setMouseIsOver(true);
  };

  const mouseLeft = () => {
    setMouseIsOver(false);
  };

  const elementSelected = () => {
    setSelectedElement(element);
  };

  const draggable = useDraggable({
    id: `${element.id}-drag-handler`,
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElement: true,
    },
  });

  if (draggable.isDragging) return null;

  const DesignerElement = FormElements[element.type].designerComponent;

  return (
    <div
      ref={draggable.setNodeRef}
      className="relative h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset"
      onMouseEnter={mouseEntered}
      onMouseLeave={mouseLeft}
      onClick={(e) => {
        e.stopPropagation();
        elementSelected();
      }}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <div
        ref={topHalf.setNodeRef}
        className="absolute w-full h-1/2 rounded-t-md "
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute w-full h-1/2 bottom-0 rounded-b-md "
      />
      {mouseIsOver && (
        <>
          <div className="absolute right-0 h-full">
            <Button
              variant="outline"
              className="flex justify-center h-full border rounded-md rounded-l-none bg-red-500"
              onClick={(e) => {
                e.stopPropagation();
                removeElement(element.id);
              }}
            >
              <BiSolidTrash className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <p className="text-muted-foreground text-sm">
              Click for properties or drag to move
            </p>
          </div>
        </>
      )}
      {topHalf.isOver && (
        <div className="absolute top-0 w-full rounded-md h-[7px] rounded-b-none bg-primary" />
      )}
      <div
        className={cn(
          "flex w-full h-[120px] items-cetner rounded-md bg-accent/40 px-4 py-2 pointer-events-none",
          mouseIsOver && "opacity-30"
        )}
      >
        <DesignerElement elementInstance={element} />
      </div>
      {bottomHalf.isOver && (
        <div className="absolute bottom-0 w-full rounded-md h-[7px] rounded-t-none bg-primary" />
      )}
    </div>
  );
};

export default DesignerElementWrapper;
