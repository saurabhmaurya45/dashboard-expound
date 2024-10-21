import * as Tooltip from "@radix-ui/react-tooltip";
import { cn } from "@utils/common";

export const RadixTooltip = ({
  tooltipTrigger,
  tooltipContent,
  position,
  arrow,
  size,
  open,
  interactive,
  delay,
  tooltipContentClassName,
  hideOnClick,
  arrowSize,
  arrowClassName,
  style,
  sideOffset,
  align,
  alignOffset,
  arrowOffset
}) => {
  const getPosition = (position) => {
    switch (position) {
      case "top":
        return "top";
      case "bottom":
        return "bottom";
      case "left":
        return "left";
      case "right":
        return "right";
      default:
        return "top";
    }
  };

  const getSize = (size) => {
    switch (size) {
      case "small":
        return "text-sm";
      case "big":
        return "text-lg";
      default:
        return "text-base";
    }
  };

  return (
    <Tooltip.Provider>
      <Tooltip.Root
        delayDuration={delay}
        open={open}
        disableHoverableContent={!interactive}
      >
        <Tooltip.Trigger asChild>
          <span style={{ display: "inline-block" }}>{tooltipTrigger}</span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={cn(
              `TooltipContent rounded-lg shadow-lg z-[50] text-nowrap font-normal text-sm leading-5 p-2 px-4 bg-blue-950 text-white `,
              getSize(size),
              tooltipContentClassName
            )}
            style={style}
            side={getPosition(position)}
            sideOffset={sideOffset ?? 0}
            align={align ?? ""}
            alignOffset={alignOffset ?? 0}
            onPointerDownOutside={hideOnClick ? () => {} : null} // Handle hide on click
          >
            {tooltipContent}
            {arrow && (
              <Tooltip.Arrow
                className={`fill-blue-950 ${arrowClassName} ${
                  arrowSize === "big" ? "w-4 h-4" : "w-4 h-2"
                }`}
                offset={arrowOffset}
              />
            )}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
