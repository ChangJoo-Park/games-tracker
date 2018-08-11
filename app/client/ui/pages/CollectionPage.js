import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { groupBy } from "lodash";
import { Game } from "types";
import { fetchGames } from "state/collection/actions";
import GameCardGrid from "ui/organisms/GameCardGrid";

const mapStateToProps = ({ Collection }) => {
  const games = Collection.games;
  const collection = groupBy(games, "status");

  return {
    unassigned: collection.undefined || [],
    wishlist: collection.wishlist || [],
    backlog: collection.backlog || [],
    playing: collection.playing || [],
    completed: collection.completed || []
  };
};

const mapDispatchToProps = {
  fetchGames
};

class CollectionPage extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const { unassigned, wishlist, backlog, playing, completed } = this.props;

    return (
      <Fragment>
        {!!unassigned.length && (
          <Fragment>
            <div>Unassigned</div>
            <GameCardGrid collection={unassigned} />
          </Fragment>
        )}

        <div>Wishlist</div>
        <GameCardGrid collection={wishlist} />

        <div>Backlog</div>
        <GameCardGrid collection={backlog} />

        <div>Playing</div>
        <GameCardGrid collection={playing} />

        <div>Completed</div>
        <GameCardGrid collection={completed} />
      </Fragment>
    );
  }
}

CollectionPage.propTypes = {
  unassigned: PropTypes.arrayOf(Game),
  wishlist: PropTypes.arrayOf(Game),
  backlog: PropTypes.arrayOf(Game),
  playing: PropTypes.arrayOf(Game),
  completed: PropTypes.arrayOf(Game),
  fetchGames: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPage);
