import { Box, Link, Typography } from "@mui/material";
import { header_section_data as data } from "../data";

export function HeaderSection() {
  return (
    <Box textAlign="center">
      <Box display="flex" alignItems="center" gap={2} justifyContent="center">
        {data.image && (
          <img
            src={data.image}
            alt="Person"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}

        {/* Name + position stacked vertically */}
        <Box display="flex" flexDirection="column" textAlign="center">
          <Typography variant="h4" fontWeight={700}>
            {data.name}
          </Typography>

          <Typography variant="h6" fontWeight={500}>
            {data.position}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body1" sx={{ mt: 1 }}>
        <Link href={data.contact.email}>{data.contact.email}</Link>
        {" • "}
        {data.contact.phone} • {data.contact.location}
      </Typography>

      <Typography
        variant="body2"
        sx={{ mt: 2, maxWidth: 600, mx: "auto", textAlign: "justify" }}
      >
        {data.summary}
      </Typography>
    </Box>
  );
}
