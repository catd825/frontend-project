import styled from "@emotion/styled";

export const RecipeContainerDiv = styled.div({
  backgroundColor: "white",
  borderRadius: "10px",
  width: "75%",
  margin: "15px auto",
  padding: "30px",
  display: "inlineFlex",
  flexWrap: "wrap",
  position: 'sticky'
});

export const RecipeContainerWrapper = styled.div({
  width: "100%",
  textAlign: "center",
  top: "80px",
  bottom: "0",
  position: "fixed",
  overflow: "scroll"
});

export const HeaderStyle = styled.div({
  backgroundColor: "white",
  width: "100%",
  position: "fixed",
  height: "80px"
});

export const RecipeCardStyle = styled.div({
  margin: "auto",
  fontSize: "20px",
  p: {
    marginTop: "0px"
  },
  img: { borderRadius: "10px" }
});
