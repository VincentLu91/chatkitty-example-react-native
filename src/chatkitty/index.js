import ChatKitty from 'chatkitty';

export const kitty = ChatKitty.getInstance('e3260be3-fd51-4643-8553-37671890a9f9');

export function getChannelDisplayName(channel) {
  if (channel.type === 'DIRECT') {
    return channel.members.map((member) => member.displayName).join(', ');
  } else {
    return channel.name;
  }
}