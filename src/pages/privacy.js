import React from "react"
import Layout from "../components/UI/Layout"
import MuiLink from "@mui/material/Link"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "../components/Utils/Typography"

export default function PrivacyPage() {
  return (
    <Layout>
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            style={{ height: "30vh" }}
          >
            Theme Ported by{" "}
            <MuiLink href="https://snappywebdesign.net">
              Snappy Web Design
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}
