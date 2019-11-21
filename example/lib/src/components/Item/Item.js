import React from "react";
import PropTypes from "prop-types";
import { View, FlatList } from "react-native";
import Card from "../Card/Card";
import styles from "./Item.style";
import PointLine from "../PointLine/PointLine";

const dummyListData = [1, 2];

const Item = props => {
  const { data, isLastMember } = props;

  renderItem = listData => {
    const { item, index } = listData;
    return <Card key={index} isCard data={item} />;
  };

  return (
    <View style={styles.container}>
      <PointLine isLastMember={isLastMember} length={data.length} />
      <View style={styles.insideListContainer}>
        <FlatList data={data} renderItem={renderItem.bind(this)} />
      </View>
    </View>
  );
};

Item.propTypes = {
  data: PropTypes.array
};

Item.defaultProps = {
  data: dummyListData
};

export default Item;
