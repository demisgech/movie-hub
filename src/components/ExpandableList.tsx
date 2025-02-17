import { Button, Heading, List, ListItem } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  children: ReactNode;
  data: string[] | number[] | null;
}

const ExpandableList = ({ children, data }: Props) => {
  const [visible, setVisibility] = useState(false);

  const newData = visible ? data : data?.slice(0, 5);

  return (
    <>
      <Heading marginBottom={3} fontSize="3xl">
        {children}
      </Heading>
      <List>
        {newData &&
          newData.map((d, index) => (
            <ListItem key={index}>
              <Button fontSize="lg" variant="link" paddingY={1}>
                {d}
              </Button>
            </ListItem>
          ))}
        <ListItem>
          <Button
            marginTop={2}
            onClick={() => setVisibility(!visible)}
            rightIcon={visible ? <BsChevronUp /> : <BsChevronDown />}
          >
            {visible ? "Show Less" : "Show More"}
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default ExpandableList;
