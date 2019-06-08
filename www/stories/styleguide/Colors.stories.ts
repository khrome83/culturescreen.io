import { storiesOf } from "@storybook/vue";
import copy from "clipboard-copy";

// Colors
const colors = storiesOf("Styleguide/Colors", module)

colors.add("Color Pallet", () => ({
  data: () => ({
    item: {
      margin: '1rem',
      border: 'thin solid transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0rem 0.125rem 0.3125rem 0rem',
      borderRadius: '0.3125rem',
      padding: ' 0 0 1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',

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
    pallet: {
      display: 'block',
      width: '6rem',
      height: '6rem',
      borderRadius: '0.3125rem',
      margin: '0.25rem 0.25rem 0',
      boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,0.5)',
    },
    wrapper: {
      padding: '2rem',
      position: 'relative',
    },
    toast: {
      display: 'none',
      padding: '0.5rem 1rem',
      backgroundColor: '#010b19',
      borderRadius: '0.25rem',
      color: '#fff',
      textAlign: 'center',
      textTransform: 'uppercase',
      position: 'absolute',
      fontSize: '0.75rem',
      border: 'thin solid #fff'
    }
  }),
  methods: {
    copy: (e) => {
      const item = e.target.closest('.item');
      if (item !== null) {
        const [leading, ...text] = item.querySelectorAll('.text')[0].innerText;
        const { top, left } = item.getBoundingClientRect();
        copy(text.join(''));
        const toast = document.getElementById('toast');
        toast.style.top = `${top + 36 + window.scrollY}px`;
        toast.style.left = `${left + 10}px`;
        toast.style.display = "inline-block";
      }
    }
  },
  template: `
    <div :style="wrapper" @click="copy">
      <div class="toast" id="toast" :style="toast">Copied!</div>
      <div :style="heading">Primary</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ee0028'}]"></div>
          <div class="text" :style="label">#ee0028</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#da0629'}]"></div>
          <div class="text" :style="label">#da0629</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#f32144'}]"></div>
          <div class="text" :style="label">#f32144</div>
        </div>
      </div>
      <div :style="heading">Secondary</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#010b19'}]"></div>
          <div class="text" :style="label">#010b19</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#010b19'}]"></div>
          <div class="text" :style="label">#010b19</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#ffffff'}]"></div>
          <div class="text" :style="label">#ffffff</div>
        </div>
      </div>
      <div :style="heading">Backgrounds</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ffffff'}]"></div>
          <div class="text" :style="label">#ffffff</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#fdfcfb'}]"></div>
          <div class="text" :style="label">#fdfcfb</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#010b19'}]"></div>
          <div class="text" :style="label">#010b19</div>
        </div>
      </div>
      <div :style="heading">Grey - Border</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#eaeaea'}]"></div>
          <div class="text" :style="label">#eaeaea</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#cccbcb'}]"></div>
          <div class="text" :style="label">#cccbcb</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#33333c'}]"></div>
          <div class="text" :style="label">#33333c</div>
        </div>
      </div>
      <div :style="heading">Grey - Background</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#fafafa'}]"></div>
          <div class="text" :style="label">#fafafa</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#f3f3f3'}]"></div>
          <div class="text" :style="label">#f3f3f3</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#111119'}]"></div>
          <div class="text" :style="label">#111119</div>
        </div>
      </div>
      <div :style="heading">Grey - Foreground</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#737373'}]"></div>
          <div class="text" :style="label">#737373</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#010b19'}]"></div>
          <div class="text" :style="label">#010b19</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#6b6a6a'}]"></div>
          <div class="text" :style="label">#6b6a6a</div>
        </div>
      </div>
      <div :style="heading">Success</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#0FA172'}]"></div>
          <div class="text" :style="label">#0FA172</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#0FA172'}]"></div>
          <div class="text" :style="label">#0FA172</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#0FA172'}]"></div>
          <div class="text" :style="label">#0FA172</div>
        </div>
      </div>
      <div :style="heading">Warning</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#E26D43'}]"></div>
          <div class="text" :style="label">#E26D43</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#E26D43'}]"></div>
          <div class="text" :style="label">#E26D43</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#E26D43'}]"></div>
          <div class="text" :style="label">#E26D43</div>
        </div>
      </div>
      <div :style="heading">Error</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ff3867'}]"></div>
          <div class="text" :style="label">#ff3867</div>
        </div>
        <div :style="[item, grey]" class="item __bg-grey">
          <div :style="[pallet, { backgroundColor: '#d30260'}]"></div>
          <div class="text" :style="label">#d30260</div>
        </div>
        <div :style="[item, dark]" class="item __bg-dark">
          <div :style="[pallet, { backgroundColor: '#f30b73'}]"></div>
          <div class="text" :style="label">#f30b73</div>
        </div>
      </div>
      <div :style="heading">Tonal Pallet - Red</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ee0028'}]"></div>
          <div class="text" :style="label">#ee0028</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#f3405e'}]"></div>
          <div class="text" :style="label">#f3405e</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#f67f93'}]"></div>
          <div class="text" :style="label">#f67f93</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#fbbfc9'}]"></div>
          <div class="text" :style="label">#fbbfc9</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#fde5e9'}]"></div>
          <div class="text" :style="label">#fde5e9</div>
        </div>
      </div>
      <div :style="heading">Tonal Pallet - Teal</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#479194'}]"></div>
          <div class="text" :style="label">#479194</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#6ca1a2'}]"></div>
          <div class="text" :style="label">#6ca1a2</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#9dc0c1'}]"></div>
          <div class="text" :style="label">#9dc0c1</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#cedfe0'}]"></div>
          <div class="text" :style="label">#cedfe0</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ebf2f2'}]"></div>
          <div class="text" :style="label">#ebf2f2</div>
        </div>
      </div>
      <div :style="heading">Accent Colors - Greens</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#4dd19c'}]"></div>
          <div class="text" :style="label">#4dd19c</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#88e0bc'}]"></div>
          <div class="text" :style="label">#88e0bc</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#c3efde'}]"></div>
          <div class="text" :style="label">#c3efde</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#e7f8f1'}]"></div>
          <div class="text" :style="label">#e7f8f1</div>
        </div>
      </div>
      <div :style="heading">Accent Colors - Oranges</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ffb584'}]"></div>
          <div class="text" :style="label">#ffb584</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ffcdad'}]"></div>
          <div class="text" :style="label">#ffcdad</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ffe6d6'}]"></div>
          <div class="text" :style="label">#ffe6d6</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#fff5ee'}]"></div>
          <div class="text" :style="label">#fff5ee</div>
        </div>
      </div>
      <div :style="heading">Accent Colors - Pinks</div>
      <div :style="set">
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ff6a8d'}]"></div>
          <div class="text" :style="label">#ff6a8d</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ff9bb2'}]"></div>
          <div class="text" :style="label">#ff9bb2</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ffcdd9'}]"></div>
          <div class="text" :style="label">#ffcdd9</div>
        </div>
        <div :style="[item, light]" class="item __bg-light">
          <div :style="[pallet, { backgroundColor: '#ffebef'}]"></div>
          <div class="text" :style="label">#ffebef</div>
        </div>
      </div>
    </div>
  `
}));
