import { juniorConversationEvents } from "./schema/conversation-events";
import { juniorConversations } from "./schema/conversations";
import {
  juniorAgentBindings,
  juniorAgentInvocations,
} from "./schema/agent-invocations";
import { juniorDestinations } from "./schema/destinations";
import { juniorIdentities } from "./schema/identities";
import { juniorUsers } from "./schema/users";

export {
  juniorAgentBindings,
  juniorAgentInvocations,
  juniorConversationEvents,
  juniorConversations,
  juniorDestinations,
  juniorIdentities,
  juniorUsers,
};

export const juniorSqlSchema = {
  juniorAgentBindings,
  juniorAgentInvocations,
  juniorConversationEvents,
  juniorConversations,
  juniorDestinations,
  juniorIdentities,
  juniorUsers,
};
