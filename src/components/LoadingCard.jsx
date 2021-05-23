import { Card, CardContent, CircularProgress } from "@material-ui/core";

const LoadingCardContent = () => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <CircularProgress />
      </CardContent>
    </Card>
  );
};

export default LoadingCardContent;