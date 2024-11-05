"use client";

import TopBar from "@/src/ui/Components/transactions/transavtions-history/TopBar";
import { Box, Flex } from "@radix-ui/themes";

export default function Page() {

  return (
    <section>
        <Flex direction="column" justify="between">
            <Box>
                <TopBar
                  name="조예은" 
                  balance="110000009862" 
                  accountNumber="3333-10-0745950"
                />
            </Box>
            <Box>
            </Box>
        </Flex>
    </section>
  )
}