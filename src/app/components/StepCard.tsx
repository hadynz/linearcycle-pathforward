import { Handle, NodeProps, Position } from 'reactflow';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

interface StepCardProps {
  title: string;
  description?: string;
  tags?: string[];
}

export const StepCard = ({ title, description, tags }: StepCardProps) => {
  return (
    <Card sx={{ width: 320 }} variant="outlined">
      <Typography id="card-description" level="h2" mb={0.5}>
        {title}
      </Typography>
      {description && (
        <Typography fontSize="sm" mb={1} sx={{ color: 'text.tertiary' }}>
          {description}
        </Typography>
      )}
      {tags && tags.length > 0 && (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {tags.map((tag) => (
            <Chip key={tag} size="sm">
              {tag}
            </Chip>
          ))}
        </Box>
      )}
      <AvatarGroup>
        <Avatar alt="Remy Sharp" size="sm" src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar
          alt="Travis Howard"
          size="sm"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar alt="Cindy Baker" size="sm" src="https://mui.com/static/images/avatar/3.jpg" />
        <Avatar size="sm">+3</Avatar>
      </AvatarGroup>
    </Card>
  );
};

export const StepCardNode = ({ data }: NodeProps<StepCardProps>) => {
  console.log('data', data);
  return (
    <>
      <Handle position={Position.Left} type="target" />
      <StepCard {...data} />
      <Handle id="a" position={Position.Right} type="source" />
    </>
  );
};
