"use client";

import { Accordion } from "@ark-ui/react";
import { HiChevronDown } from "@react-icons/all-files/hi/HiChevronDown";

const ArkUiAccordion = () => {
  return (
    <Accordion.Root defaultValue={["React"]} collapsible>
      {["React", "Solid", "Vue"].map((item, id) => (
        <Accordion.Item key={id} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              <HiChevronDown />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default ArkUiAccordion;
