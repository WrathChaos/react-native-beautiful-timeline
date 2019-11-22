import React from "react";
import PropTypes from "prop-types";
import { View, FlatList } from "react-native";
import Card from "../Card/Card";
import styles from "./Item.style";
import PointLine from "../PointLine/PointLine";

const dummyListData = [1, 2];

const Item = props => {
  const { data, list, isLastMember } = props;

  renderItem = listData => {
    const { item, index } = listData;
    return <Card {...props} key={index} isCard data={item} />;
  };

  return (
    <View style={styles.container}>
      <PointLine
        {...props}
        data={data.date}
        length={list.length}
        isLastMember={isLastMember}
      />
      <View style={styles.insideListContainer}>
        <FlatList
          data={list}
          renderItem={renderItem.bind(this)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

Item.propTypes = {
  data: PropTypes.object,
  list: PropTypes.array
};

Item.defaultProps = {
  data: {},
  list: dummyListData
};

export default Item;
