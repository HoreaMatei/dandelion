import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
 
const Grid = ({ blok }) => {
  return (
    <div  className="okok" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;