import { Profission } from "@/components/cargos";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Head from "next/head";
import { Description } from "@/components/description";

export default function Home() {
  return (
    <>
      <Head>
        <title>Filipe Costa</title>
      </Head>

      <Box
        component="header"
        sx={{
          width: "100%",
          height: 400,
          backgroundColor: "primary.main",
          display: "flex",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={6}
        >
          <Profission number={1} />
          <Description />
        </Stack>
      </Box>
    </>
  );
}
