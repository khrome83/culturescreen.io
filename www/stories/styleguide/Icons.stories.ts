import { storiesOf } from "@storybook/vue";
import CloseIcon from "../../assets/svg/close.svg";
import MenuIcon from "../../assets/svg/menu.svg";
import CheckmarkIcon from "../../assets/svg/checkmark.svg";
import CollapseIcon from "../../assets/svg/collapse.svg";
import DashIcon from "../../assets/svg/dash.svg";
import ExpandIcon from "../../assets/svg/expand.svg";
import SearchIcon from "../../assets/svg/search.svg";
import FavoriteIcon from "../../assets/svg/favorite.svg";
import UnfavoriteIcon from "../../assets/svg/unfavorite.svg";
import StarIcon from "../../assets/svg/star.svg";
import UpdownIcon from "../../assets/svg/updown.svg";
import LoadingIcon from "../../assets/svg/loading.svg";
import SendIcon from "../../assets/svg/send.svg";
import UnlimitedIcon from "../../assets/svg/unlimited.svg";
import IronIcon from "../../assets/svg/medals/iron.svg";
import CopperIcon from "../../assets/svg/medals/copper.svg";
import SilverIcon from "../../assets/svg/medals/silver.svg";
import GoldIcon from "../../assets/svg/medals/gold.svg";
import PlatinumIcon from "../../assets/svg/medals/platinum.svg";
import PlaceholderIcon from "../../assets/svg/placeholder.svg";
import TopLeftArrow from "../../assets/svg/arrows/topleft.svg";

// Icons
const icons = storiesOf("Styleguide/Icons", module)

icons.add("Basic Icons", () => ({
  components: { CloseIcon, MenuIcon, CheckmarkIcon, CollapseIcon, ExpandIcon, SearchIcon, FavoriteIcon, UnfavoriteIcon, StarIcon, UpdownIcon, LoadingIcon, SendIcon, DashIcon, UnlimitedIcon },
  data: () => ({
    item: {
      margin: '1rem',
      border: 'thin solid transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0rem 0.125rem 0.3125rem 0rem',
      borderRadius: '0.3125rem',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '5rem',
      minHeight: '5rem',

    },
    light: {
      backgroundColor: '#ffffff',
    },
    grey: {
      backgroundColor: '#fdfcfb',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0rem 0.125rem 0.3125rem 0rem',
    },
    dark: {
      backgroundColor: '#010b19',
      boxShadow: 'rgba(0, 0, 0, 0.5) 0rem 0.125rem 0.3125rem 0rem',
    },
    heading: {
      fontSize: '0.75rem',
      margin: '0',
      padding: '0.5rem 0 0.5rem 1rem',
      color: '#737373',
      textTransform: 'uppercase',
    },
    set: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: '2rem',
    },
    label: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '300',
      paddingTop: '1rem',
    },
    wrapper: {
      padding: '2rem',
    },
    icon: {
      width: '2rem',
      height: '2rem',
    }
  }),
  template: `
    <div :style="wrapper">
      <div :style="heading">On Light Background</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <menu-icon :style="icon"/>
          <div :style="label">Menu</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <close-icon :style="icon" />
          <div :style="label">Close</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <checkmark-icon :style="icon" />
          <div :style="label">Checkmark</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <expand-icon :style="icon" />
          <div :style="label">Expand</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <collapse-icon :style="icon" />
          <div :style="label">Collapse</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <search-icon :style="icon" />
          <div :style="label">Search</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <favorite-icon :style="icon" />
          <div :style="label">Favorite</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <Unfavorite-icon :style="icon" />
          <div :style="label">Unfavorite</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <star-icon :style="icon" />
          <div :style="label">Star</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <updown-icon :style="icon" />
          <div :style="label">Up / Down</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <loading-icon :style="icon" />
          <div :style="label">Loading</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <send-icon :style="icon" />
          <div :style="label">Send</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <dash-icon :style="icon" />
          <div :style="label">Dash</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <unlimited-icon :style="icon" />
          <div :style="label">Unlimited</div>
        </div>
      </div>
      <div :style="heading">On Dark Background</div>
      <div :style="set">
        <div :style="[item, dark]" class="__bg-dark">
          <menu-icon :style="icon" />
          <div :style="label">Menu</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <close-icon :style="icon" />
          <div :style="label">Close</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <checkmark-icon :style="icon" />
          <div :style="label">Checkmark</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <expand-icon :style="icon" />
          <div :style="label">Expand</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <collapse-icon :style="icon" />
          <div :style="label">Collapse</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <search-icon :style="icon" />
          <div :style="label">Search</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <favorite-icon :style="icon" />
          <div :style="label">Favorite</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <Unfavorite-icon :style="icon" />
          <div :style="label">Unfavorite</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <star-icon :style="icon" />
          <div :style="label">Star</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <updown-icon :style="icon" />
          <div :style="label">Up / Down</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <loading-icon :style="icon" />
          <div :style="label">Loading</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <send-icon :style="icon" />
          <div :style="label">Send</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <dash-icon :style="icon" />
          <div :style="label">Dash</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <unlimited-icon :style="icon" />
          <div :style="label">Unlimited</div>
        </div>
      </div>
    </div>
  `
}));

icons.add("Color Icons", () => ({
  components: { IronIcon, CopperIcon, SilverIcon, GoldIcon, PlatinumIcon, PlaceholderIcon },
  data: () => ({
    item: {
      margin: '1rem',
      border: 'thin solid transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0rem 0.125rem 0.3125rem 0rem',
      borderRadius: '0.3125rem',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '5rem',
      minHeight: '5rem',

    },
    light: {
      backgroundColor: '#ffffff',
    },
    grey: {
      backgroundColor: '#fdfcfb',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0rem 0.125rem 0.3125rem 0rem',
    },
    dark: {
      backgroundColor: '#010b19',
      boxShadow: 'rgba(0, 0, 0, 0.5) 0rem 0.125rem 0.3125rem 0rem',
    },
    heading: {
      fontSize: '0.75rem',
      margin: '0',
      padding: '0.5rem 0 0.5rem 1rem',
      color: '#737373',
      textTransform: 'uppercase',
    },
    set: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: '2rem',
    },
    label: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '300',
      paddingTop: '1rem',
    },
    wrapper: {
      padding: '2rem',
    },
    icon: {
      width: '6rem',
      height: '6rem',
    }
  }),
  template: `
    <div :style="wrapper">
      <div :style="heading">On Light Background</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <iron-icon :style="icon"/>
          <div :style="label">Iron</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <copper-icon :style="icon"/>
          <div :style="label">Copper</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <silver-icon :style="icon"/>
          <div :style="label">Silver</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <gold-icon :style="icon"/>
          <div :style="label">Gold</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <platinum-icon :style="icon"/>
          <div :style="label">Platinum</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <placeholder-icon :style="icon"/>
          <div :style="label">Placeholder</div>
        </div>
      </div>

      <div :style="heading">On Grey Background</div>
      <div :style="set">
        <div :style="[item, grey]" class="__bg-grey">
          <iron-icon :style="icon"/>
          <div :style="label">Iron</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <copper-icon :style="icon"/>
          <div :style="label">Copper</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <silver-icon :style="icon"/>
          <div :style="label">Silver</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <gold-icon :style="icon"/>
          <div :style="label">Gold</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <platinum-icon :style="icon"/>
          <div :style="label">Platinum</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <placeholder-icon :style="icon"/>
          <div :style="label">Placeholder</div>
        </div>
      </div>

      <div :style="heading">On Dark Background</div>
      <div :style="set">
        <div :style="[item, dark]" class="__bg-dark">
          <iron-icon :style="icon"/>
          <div :style="label">Iron</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <copper-icon :style="icon"/>
          <div :style="label">Copper</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <silver-icon :style="icon"/>
          <div :style="label">Silver</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <gold-icon :style="icon"/>
          <div :style="label">Gold</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <platinum-icon :style="icon"/>
          <div :style="label">Platinum</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <placeholder-icon :style="icon"/>
          <div :style="label">Placeholder</div>
        </div>
      </div>
    </div>
  `
}));

icons.add("Arrows", () => ({
  components: { TopLeftArrow },
  data: () => ({
    item: {
      margin: '1rem',
      border: 'thin solid transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0rem 0.125rem 0.3125rem 0rem',
      borderRadius: '0.3125rem',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '5rem',
      minHeight: '5rem',

    },
    light: {
      backgroundColor: '#ffffff',
    },
    grey: {
      backgroundColor: '#fdfcfb',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0rem 0.125rem 0.3125rem 0rem',
    },
    dark: {
      backgroundColor: '#010b19',
      boxShadow: 'rgba(0, 0, 0, 0.5) 0rem 0.125rem 0.3125rem 0rem',
    },
    heading: {
      fontSize: '0.75rem',
      margin: '0',
      padding: '0.5rem 0 0.5rem 1rem',
      color: '#737373',
      textTransform: 'uppercase',
    },
    set: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: '2rem',
    },
    label: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '300',
      paddingTop: '1rem',
    },
    wrapper: {
      padding: '2rem',
    },
    icon: {
      width: '6rem',
      height: '6rem',
      stroke: '#EE0028',
    }
  }),
  template: `
    <div :style="wrapper">
      <div :style="heading">On Light Background</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <top-left-arrow :style="icon"/>
          <div :style="label">Top Left</div>
        </div>
      </div>
      <div :style="heading">On Dark Background</div>
      <div :style="set">
        <div :style="[item, dark]" class="__bg-dark">
          <top-left-arrow :style="icon" />
          <div :style="label">Top Left</div>
        </div>
      </div>
    </div>
  `
}));
