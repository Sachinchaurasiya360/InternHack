
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




c
o
n
s
t
 
S
T
O
R
A
G
E
_
K
E
Y
 
=
 
"
s
y
s
t
e
m
-
d
e
s
i
g
n
:
p
r
o
g
r
e
s
s
:
v
1
"
;


c
o
n
s
t
 
E
V
E
N
T
_
N
A
M
E
 
=
 
"
s
y
s
t
e
m
-
d
e
s
i
g
n
:
p
r
o
g
r
e
s
s
-
c
h
a
n
g
e
d
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
L
e
s
s
o
n
P
r
o
g
r
e
s
s
 
{


 
 
c
o
m
p
l
e
t
e
d
:
 
b
o
o
l
e
a
n
;


 
 
q
u
i
z
S
c
o
r
e
:
 
n
u
m
b
e
r
;


 
 
c
o
m
p
l
e
t
e
d
A
t
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


}




t
y
p
e
 
P
r
o
g
r
e
s
s
M
a
p
 
=
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
L
e
s
s
o
n
P
r
o
g
r
e
s
s
>
>
;




f
u
n
c
t
i
o
n
 
r
e
a
d
(
)
:
 
P
r
o
g
r
e
s
s
M
a
p
 
{


 
 
i
f
 
(
t
y
p
e
o
f
 
w
i
n
d
o
w
 
=
=
=
 
"
u
n
d
e
f
i
n
e
d
"
)
 
r
e
t
u
r
n
 
{
}
;


 
 
t
r
y
 
{


 
 
 
 
c
o
n
s
t
 
r
a
w
 
=
 
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
)
;


 
 
 
 
r
e
t
u
r
n
 
r
a
w
 
?
 
(
J
S
O
N
.
p
a
r
s
e
(
r
a
w
)
 
a
s
 
P
r
o
g
r
e
s
s
M
a
p
)
 
:
 
{
}
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
 
{
}
;


 
 
}


}




f
u
n
c
t
i
o
n
 
w
r
i
t
e
(
m
a
p
:
 
P
r
o
g
r
e
s
s
M
a
p
)
 
{


 
 
i
f
 
(
t
y
p
e
o
f
 
w
i
n
d
o
w
 
=
=
=
 
"
u
n
d
e
f
i
n
e
d
"
)
 
r
e
t
u
r
n
;


 
 
t
r
y
 
{


 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
m
a
p
)
)
;


 
 
 
 
w
i
n
d
o
w
.
d
i
s
p
a
t
c
h
E
v
e
n
t
(
n
e
w
 
C
u
s
t
o
m
E
v
e
n
t
(
E
V
E
N
T
_
N
A
M
E
)
)
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
/
/
 
i
g
n
o
r
e
 
q
u
o
t
a
 
/
 
p
r
i
v
a
t
e
 
m
o
d
e
 
f
a
i
l
u
r
e
s


 
 
}


}




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
 
g
e
t
L
e
s
s
o
n
P
r
o
g
r
e
s
s
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
,
 
s
l
u
g
:
 
s
t
r
i
n
g
)
:
 
L
e
s
s
o
n
P
r
o
g
r
e
s
s
 
|
 
u
n
d
e
f
i
n
e
d
 
{


 
 
r
e
t
u
r
n
 
r
e
a
d
(
)
[
l
e
v
e
l
I
d
]
?
.
[
s
l
u
g
]
;


}




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
 
g
e
t
L
e
v
e
l
P
r
o
g
r
e
s
s
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
)
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
L
e
s
s
o
n
P
r
o
g
r
e
s
s
>
 
{


 
 
r
e
t
u
r
n
 
r
e
a
d
(
)
[
l
e
v
e
l
I
d
]
 
?
?
 
{
}
;


}




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
 
m
a
r
k
L
e
s
s
o
n
C
o
m
p
l
e
t
e
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
,
 
s
l
u
g
:
 
s
t
r
i
n
g
,
 
q
u
i
z
S
c
o
r
e
:
 
n
u
m
b
e
r
)
 
{


 
 
c
o
n
s
t
 
m
a
p
 
=
 
r
e
a
d
(
)
;


 
 
c
o
n
s
t
 
l
e
v
e
l
 
=
 
m
a
p
[
l
e
v
e
l
I
d
]
 
?
?
 
{
}
;


 
 
l
e
v
e
l
[
s
l
u
g
]
 
=
 
{


 
 
 
 
c
o
m
p
l
e
t
e
d
:
 
t
r
u
e
,


 
 
 
 
q
u
i
z
S
c
o
r
e
,


 
 
 
 
c
o
m
p
l
e
t
e
d
A
t
:
 
n
e
w
 
D
a
t
e
(
)
.
t
o
I
S
O
S
t
r
i
n
g
(
)
,


 
 
}
;


 
 
m
a
p
[
l
e
v
e
l
I
d
]
 
=
 
l
e
v
e
l
;


 
 
w
r
i
t
e
(
m
a
p
)
;


}




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
 
u
s
e
P
r
o
g
r
e
s
s
M
a
p
(
)
:
 
P
r
o
g
r
e
s
s
M
a
p
 
{


 
 
c
o
n
s
t
 
[
m
a
p
,
 
s
e
t
M
a
p
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
<
P
r
o
g
r
e
s
s
M
a
p
>
(
(
)
 
=
>
 
r
e
a
d
(
)
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
 
h
a
n
d
l
e
r
 
=
 
(
)
 
=
>
 
s
e
t
M
a
p
(
r
e
a
d
(
)
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
E
V
E
N
T
_
N
A
M
E
,
 
h
a
n
d
l
e
r
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
t
o
r
a
g
e
"
,
 
h
a
n
d
l
e
r
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
E
V
E
N
T
_
N
A
M
E
,
 
h
a
n
d
l
e
r
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
t
o
r
a
g
e
"
,
 
h
a
n
d
l
e
r
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
 
m
a
p
;


}




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
 
g
e
t
L
e
v
e
l
S
t
a
t
s
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
,
 
t
o
t
a
l
L
e
s
s
o
n
s
:
 
n
u
m
b
e
r
)
:
 
{


 
 
c
o
m
p
l
e
t
e
d
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
p
e
r
c
e
n
t
:
 
n
u
m
b
e
r
;


}
 
{


 
 
c
o
n
s
t
 
l
e
v
e
l
 
=
 
r
e
a
d
(
)
[
l
e
v
e
l
I
d
]
 
?
?
 
{
}
;


 
 
c
o
n
s
t
 
c
o
m
p
l
e
t
e
d
 
=
 
O
b
j
e
c
t
.
v
a
l
u
e
s
(
l
e
v
e
l
)
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
c
o
m
p
l
e
t
e
d
)
.
l
e
n
g
t
h
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
 
t
o
t
a
l
L
e
s
s
o
n
s
 
>
 
0
 
?
 
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
(
c
o
m
p
l
e
t
e
d
 
/
 
t
o
t
a
l
L
e
s
s
o
n
s
)
 
*
 
1
0
0
)
 
:
 
0
;


 
 
r
e
t
u
r
n
 
{
 
c
o
m
p
l
e
t
e
d
,
 
t
o
t
a
l
:
 
t
o
t
a
l
L
e
s
s
o
n
s
,
 
p
e
r
c
e
n
t
 
}
;


}


