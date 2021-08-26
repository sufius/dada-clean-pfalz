import React, { FC, useState } from "react";
import { BaseScrollOptions, useHashScroll } from "react-hash-scroll";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import DcpStepper from "../../components/DcpStepper";

const UseHashScrollDemo: FC = () => {
  //You can play around with the behavior, position, scrollFunc, etc.
  const options: Partial<BaseScrollOptions> = {
    position: "start",
    behavior: "smooth"
  };

  const ref1 = useHashScroll<HTMLDivElement>("section_1", options);
  const ref2 = useHashScroll<HTMLDivElement>("section_2", options);
  const ref3 = useHashScroll<HTMLDivElement>("section_3", options);
  const ref4 = useHashScroll<HTMLDivElement>("section_4", options);
  const ref5 = useHashScroll<HTMLDivElement>("section_5", options);
  const ref6 = useHashScroll<HTMLDivElement>("section_6", options);
  const ref7 = useHashScroll<HTMLDivElement>("section_7", options);

  return (
    <Container maxWidth="lg">
      <Box ref={ref1} sx={{ mt: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-beta example with TypeScript
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Rhoncus dolor purus non enim praesent elementum facilisis leo
          vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis
          convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
          suscipit adipiscing bibendum est ultricies integer quis.
          Cursus euismod quis viverra nibh cras. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum leo. Mauris
          commodo quis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum
          varius duis at consectetur lorem. Velit sed ullamcorper morbi
          tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla
          est ullamcorper eget nulla facilisi etiam dignissim diam.
          Pulvinar elementum integer enim neque volutpat ac tincidunt.
          Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
          sit amet volutpat consequat mauris. Elementum eu facilisis sed
          odio morbi. Euismod lacinia at quis risus sed vulputate odio.
          Morbi tincidunt ornare massa eget egestas purus viverra
          accumsan in. In hendrerit gravida rutrum quisque non tellus
          orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi
          quis eleifend. Commodo viverra maecenas accumsan lacus vel
          facilisis. Nulla posuere sollicitudin aliquam ultrices
          sagittis orci a.
        </Typography>
      </Box>
      <Box
        ref={ref2}
        sx={{ display: "flex", justifyContent: "center", mb: 2 }}
      >
        <DcpStepper />
      </Box>
      <Box ref={ref3} sx={{ mt: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-beta example with TypeScript
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Rhoncus dolor purus non enim praesent elementum facilisis leo
          vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis
          convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
          suscipit adipiscing bibendum est ultricies integer quis.
          Cursus euismod quis viverra nibh cras. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum leo. Mauris
          commodo quis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum
          varius duis at consectetur lorem. Velit sed ullamcorper morbi
          tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla
          est ullamcorper eget nulla facilisi etiam dignissim diam.
          Pulvinar elementum integer enim neque volutpat ac tincidunt.
          Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
          sit amet volutpat consequat mauris. Elementum eu facilisis sed
          odio morbi. Euismod lacinia at quis risus sed vulputate odio.
          Morbi tincidunt ornare massa eget egestas purus viverra
          accumsan in. In hendrerit gravida rutrum quisque non tellus
          orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi
          quis eleifend. Commodo viverra maecenas accumsan lacus vel
          facilisis. Nulla posuere sollicitudin aliquam ultrices
          sagittis orci a.
        </Typography>
      </Box>
      <Box
        ref={ref4}
        sx={{ display: "flex", justifyContent: "center", mb: 2 }}
      >
        <DcpStepper />
      </Box>
      <Box ref={ref5} sx={{ mt: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-beta example with TypeScript
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Rhoncus dolor purus non enim praesent elementum facilisis leo
          vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis
          convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
          suscipit adipiscing bibendum est ultricies integer quis.
          Cursus euismod quis viverra nibh cras. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum leo. Mauris
          commodo quis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum
          varius duis at consectetur lorem. Velit sed ullamcorper morbi
          tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla
          est ullamcorper eget nulla facilisi etiam dignissim diam.
          Pulvinar elementum integer enim neque volutpat ac tincidunt.
          Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
          sit amet volutpat consequat mauris. Elementum eu facilisis sed
          odio morbi. Euismod lacinia at quis risus sed vulputate odio.
          Morbi tincidunt ornare massa eget egestas purus viverra
          accumsan in. In hendrerit gravida rutrum quisque non tellus
          orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi
          quis eleifend. Commodo viverra maecenas accumsan lacus vel
          facilisis. Nulla posuere sollicitudin aliquam ultrices
          sagittis orci a.
        </Typography>
      </Box>
      <Box ref={ref6} sx={{ mt: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-beta example with TypeScript
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Rhoncus dolor purus non enim praesent elementum facilisis leo
          vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis
          convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
          suscipit adipiscing bibendum est ultricies integer quis.
          Cursus euismod quis viverra nibh cras. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum leo. Mauris
          commodo quis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum
          varius duis at consectetur lorem. Velit sed ullamcorper morbi
          tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla
          est ullamcorper eget nulla facilisi etiam dignissim diam.
          Pulvinar elementum integer enim neque volutpat ac tincidunt.
          Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
          sit amet volutpat consequat mauris. Elementum eu facilisis sed
          odio morbi. Euismod lacinia at quis risus sed vulputate odio.
          Morbi tincidunt ornare massa eget egestas purus viverra
          accumsan in. In hendrerit gravida rutrum quisque non tellus
          orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi
          quis eleifend. Commodo viverra maecenas accumsan lacus vel
          facilisis. Nulla posuere sollicitudin aliquam ultrices
          sagittis orci a.
        </Typography>
      </Box>
      <Box ref={ref7} sx={{ mt: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-beta example with TypeScript
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Rhoncus dolor purus non enim praesent elementum facilisis leo
          vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis
          convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
          suscipit adipiscing bibendum est ultricies integer quis.
          Cursus euismod quis viverra nibh cras. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum leo. Mauris
          commodo quis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum
          varius duis at consectetur lorem. Velit sed ullamcorper morbi
          tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla
          est ullamcorper eget nulla facilisi etiam dignissim diam.
          Pulvinar elementum integer enim neque volutpat ac tincidunt.
          Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
          sit amet volutpat consequat mauris. Elementum eu facilisis sed
          odio morbi. Euismod lacinia at quis risus sed vulputate odio.
          Morbi tincidunt ornare massa eget egestas purus viverra
          accumsan in. In hendrerit gravida rutrum quisque non tellus
          orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi
          quis eleifend. Commodo viverra maecenas accumsan lacus vel
          facilisis. Nulla posuere sollicitudin aliquam ultrices
          sagittis orci a.
        </Typography>
      </Box>
    </Container>
  );
};

export default UseHashScrollDemo;
