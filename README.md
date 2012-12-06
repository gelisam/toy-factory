# Toy Factory

Toy Factory will be a tool for creating toy languages and experimenting with them.

## Target Workflow

1.  Start from a standard toy language with no special features. Some sample code is provided to show you how to use the toy language.
1.  Edit the sample code, inventing new syntax and features as you go. Since the new features don't exist in the toy language (yet), the interpreter fails. Since this is a toy language, you don't get a nice error message, nor even an incomprehensible one. You just don't get the answer you expect!
1.  Expand the standard toy languague into its component nodes. As you navigate the nodes, you see how your sample code is gradually transformed into the unexpected answer. You quickly find the step at which your new features start to mess up the interpreter.
1.  You add some nodes to the interpreter, in order to take care of the new language features. If the feature is significantly different from the other features which have been implemented so far, you might have to build your own node types out of smaller nodes, just like you would build a large object out of smaller objects.
1.  Now that you have an interpreter which works, you can edit the code and the nodes in parallel, experimenting with both to find a combination you like.

## Implementation

I plan to use [KnockoutJS](http://knockoutjs.com/) to track the dependencies between the nodes, and [Roy](https://github.com/pufuwozu/roy) as a functional alternative to javascript.
