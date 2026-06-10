
i
m
p
o
r
t
 
{
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;




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
 
S
c
r
o
l
l
P
r
o
g
r
e
s
s
B
a
r
(
)
 
{


 
 
c
o
n
s
t
 
[
s
c
r
o
l
l
P
e
r
c
e
n
t
,
 
s
e
t
S
c
r
o
l
l
P
e
r
c
e
n
t
]
 
=
 
u
s
e
S
t
a
t
e
(
0
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
r
e
f
e
r
s
R
e
d
u
c
e
d
 
=
 
w
i
n
d
o
w
.
m
a
t
c
h
M
e
d
i
a
(
"
(
p
r
e
f
e
r
s
-
r
e
d
u
c
e
d
-
m
o
t
i
o
n
:
 
r
e
d
u
c
e
)
"
)
.
m
a
t
c
h
e
s
;


 
 
 
 
i
f
 
(
p
r
e
f
e
r
s
R
e
d
u
c
e
d
)
 
r
e
t
u
r
n
;




 
 
 
 
c
o
n
s
t
 
o
n
S
c
r
o
l
l
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
l
 
=
 
d
o
c
u
m
e
n
t
.
d
o
c
u
m
e
n
t
E
l
e
m
e
n
t
;


 
 
 
 
 
 
c
o
n
s
t
 
p
e
r
c
e
n
t
 
=
 
(
e
l
.
s
c
r
o
l
l
T
o
p
 
/
 
(
e
l
.
s
c
r
o
l
l
H
e
i
g
h
t
 
-
 
e
l
.
c
l
i
e
n
t
H
e
i
g
h
t
)
)
 
*
 
1
0
0
;


 
 
 
 
 
 
s
e
t
S
c
r
o
l
l
P
e
r
c
e
n
t
(
M
a
t
h
.
m
i
n
(
p
e
r
c
e
n
t
,
 
1
0
0
)
)
;


 
 
 
 
}
;




 
 
 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
s
c
r
o
l
l
"
,
 
o
n
S
c
r
o
l
l
,
 
{
 
p
a
s
s
i
v
e
:
 
t
r
u
e
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
s
c
r
o
l
l
"
,
 
o
n
S
c
r
o
l
l
)
;


 
 
}
,
 
[
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
i
x
e
d
 
t
o
p
-
0
 
l
e
f
t
-
0
 
z
-
[
9
9
9
9
]
 
h
-
[
3
p
x
]
 
b
g
-
l
i
m
e
-
5
0
0
 
t
r
a
n
s
i
t
i
o
n
-
n
o
n
e
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
s
c
r
o
l
l
P
e
r
c
e
n
t
}
%
`
 
}
}


 
 
 
 
/
>


 
 
)
;


}


