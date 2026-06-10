
d
e
c
l
a
r
e
 
m
o
d
u
l
e
 
"
s
q
l
.
j
s
"
 
{


 
 
i
n
t
e
r
f
a
c
e
 
Q
u
e
r
y
E
x
e
c
R
e
s
u
l
t
 
{


 
 
 
 
c
o
l
u
m
n
s
:
 
s
t
r
i
n
g
[
]
;


 
 
 
 
v
a
l
u
e
s
:
 
u
n
k
n
o
w
n
[
]
[
]
;


 
 
}


 
 
i
n
t
e
r
f
a
c
e
 
D
a
t
a
b
a
s
e
 
{


 
 
 
 
r
u
n
(
s
q
l
:
 
s
t
r
i
n
g
)
:
 
v
o
i
d
;


 
 
 
 
e
x
e
c
(
s
q
l
:
 
s
t
r
i
n
g
)
:
 
Q
u
e
r
y
E
x
e
c
R
e
s
u
l
t
[
]
;


 
 
}


 
 
i
n
t
e
r
f
a
c
e
 
S
q
l
J
s
S
t
a
t
i
c
 
{


 
 
 
 
D
a
t
a
b
a
s
e
:
 
n
e
w
 
(
)
 
=
>
 
D
a
t
a
b
a
s
e
;


 
 
}


 
 
e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
i
n
i
t
S
q
l
J
s
(
c
o
n
f
i
g
?
:
 
{


 
 
 
 
l
o
c
a
t
e
F
i
l
e
?
:
 
(
f
i
l
e
:
 
s
t
r
i
n
g
)
 
=
>
 
s
t
r
i
n
g
;


 
 
}
)
:
 
P
r
o
m
i
s
e
<
S
q
l
J
s
S
t
a
t
i
c
>
;


 
 
e
x
p
o
r
t
 
t
y
p
e
 
{
 
D
a
t
a
b
a
s
e
 
}
;


}


