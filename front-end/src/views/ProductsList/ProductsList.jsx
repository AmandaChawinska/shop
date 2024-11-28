import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
export function ProductsList() {
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu></ExpandableMenu>
      </FlexContainer>
    </Layout>
  );
}
