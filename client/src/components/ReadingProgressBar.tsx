
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


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
R
e
a
d
i
n
g
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
p
r
o
g
r
e
s
s
,
 
s
e
t
P
r
o
g
r
e
s
s
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


 
 
 
 
l
e
t
 
f
r
a
m
e
 
=
 
0
;




 
 
 
 
c
o
n
s
t
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
c
a
n
c
e
l
A
n
i
m
a
t
i
o
n
F
r
a
m
e
(
f
r
a
m
e
)
;




 
 
 
 
 
 
f
r
a
m
e
 
=
 
r
e
q
u
e
s
t
A
n
i
m
a
t
i
o
n
F
r
a
m
e
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
 
s
c
r
o
l
l
T
o
p
 
=
 
w
i
n
d
o
w
.
s
c
r
o
l
l
Y
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
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
 
w
i
n
d
o
w
.
i
n
n
e
r
H
e
i
g
h
t
;




 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
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
 
=


 
 
 
 
 
 
 
 
 
 
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
 
>
 
0
 
?
 
(
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
)
 
*
 
1
0
0
 
:
 
0
;




 
 
 
 
 
 
 
 
s
e
t
P
r
o
g
r
e
s
s
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
s
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
,
 
1
0
0
)
)
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
;




 
 
 
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
(
)
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
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
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
r
e
s
i
z
e
"
,
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
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
 
{


 
 
 
 
 
 
c
a
n
c
e
l
A
n
i
m
a
t
i
o
n
F
r
a
m
e
(
f
r
a
m
e
)
;


 
 
 
 
 
 
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
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
)
;


 
 
 
 
 
 
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
r
e
s
i
z
e
"
,
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
)
;


 
 
 
 
}
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
 
l
e
f
t
-
0
 
t
o
p
-
0
 
z
-
5
0
 
h
-
1
 
w
-
f
u
l
l
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
"
>


 
 
 
 
 
 
<
m
o
t
i
o
n
.
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
h
-
f
u
l
l
 
b
g
-
i
n
d
i
g
o
-
6
0
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
4
0
0
"


 
 
 
 
 
 
 
 
r
o
l
e
=
"
p
r
o
g
r
e
s
s
b
a
r
"


 
 
 
 
 
 
 
 
a
r
i
a
-
v
a
l
u
e
n
o
w
=
{
M
a
t
h
.
r
o
u
n
d
(
p
r
o
g
r
e
s
s
)
}


 
 
 
 
 
 
 
 
a
r
i
a
-
v
a
l
u
e
m
i
n
=
{
0
}


 
 
 
 
 
 
 
 
a
r
i
a
-
v
a
l
u
e
m
a
x
=
{
1
0
0
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
w
i
d
t
h
:
 
"
0
%
"
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
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
p
r
o
g
r
e
s
s
}
%
`
 
}
}


 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
1
5
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
/
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


