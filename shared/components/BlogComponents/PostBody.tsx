import { Box, Center, Heading, Image, Stack } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlight from "./SyntaxHighlight";

import styles from "./postStyles.module.css";

interface Props {
  title?: string;
  content: string;
  tags?: string[];
  imageUrl?: string;
}

const PostBody: FunctionComponent<Props> = ({
  title,
  content,
  tags,
  imageUrl,
}): JSX.Element => {
  return (
    <Stack
      lineHeight="20px"
      whiteSpace="break-spaces"
      textAlign="justify"
      bg={"none"}
      border={`1px solid ${"white"}`}
      p={"20px"}
      spacing={"20px"}
      className={styles.blogBody}
      color={"gray.200"}
    >
      {title && (
        <Heading color="white" mb={4}>
          {title}
        </Heading>
      )}
      {imageUrl && (
        <Box border={"5px solid"} borderColor="orange" p={4}>
          <Center>
            <Image alt={title} src={imageUrl} width="150px" />
          </Center>
        </Box>
      )}
      <ReactMarkdown components={SyntaxHighlight as any}>
        {content}
      </ReactMarkdown>
    </Stack>
  );
};

export default PostBody;