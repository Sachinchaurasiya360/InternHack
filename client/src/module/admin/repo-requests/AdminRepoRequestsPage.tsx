
i
m
p
o
r
t
 
R
e
a
c
t
,
 
{
 
u
s
e
S
t
a
t
e
,
 
u
s
e
E
f
f
e
c
t
 
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


i
m
p
o
r
t
 
{
 
G
i
t
P
u
l
l
R
e
q
u
e
s
t
,
 
C
h
e
c
k
,
 
X
,
 
E
x
t
e
r
n
a
l
L
i
n
k
,
 
C
l
o
c
k
,
 
U
s
e
r
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
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
 
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s
"
;


i
m
p
o
r
t
 
{
 
L
o
a
d
i
n
g
S
c
r
e
e
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
L
o
a
d
i
n
g
S
c
r
e
e
n
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
t
o
a
s
t
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
R
e
p
o
R
e
q
u
e
s
t
,
 
P
a
g
i
n
a
t
i
o
n
,
 
R
e
p
o
D
o
m
a
i
n
,
 
R
e
p
o
D
i
f
f
i
c
u
l
t
y
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;




c
o
n
s
t
 
D
O
M
A
I
N
_
O
P
T
I
O
N
S
:
 
R
e
p
o
D
o
m
a
i
n
[
]
 
=
 
[


 
 
"
A
I
"
,


 
 
"
W
E
B
"
,


 
 
"
D
E
V
O
P
S
"
,


 
 
"
M
O
B
I
L
E
"
,


 
 
"
B
L
O
C
K
C
H
A
I
N
"
,


 
 
"
D
A
T
A
"
,


 
 
"
S
E
C
U
R
I
T
Y
"
,


 
 
"
C
L
O
U
D
"
,


 
 
"
G
A
M
I
N
G
"
,


 
 
"
O
T
H
E
R
"
,


]
;




c
o
n
s
t
 
D
I
F
F
I
C
U
L
T
Y
_
O
P
T
I
O
N
S
:
 
R
e
p
o
D
i
f
f
i
c
u
l
t
y
[
]
 
=
 
[


 
 
"
B
E
G
I
N
N
E
R
"
,


 
 
"
I
N
T
E
R
M
E
D
I
A
T
E
"
,


 
 
"
A
D
V
A
N
C
E
D
"
,


]
;




t
y
p
e
 
R
e
p
o
R
e
q
u
e
s
t
F
o
r
m
S
t
a
t
e
 
=
 
{


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
d
o
m
a
i
n
:
 
R
e
p
o
D
o
m
a
i
n
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
R
e
p
o
D
i
f
f
i
c
u
l
t
y
;


 
 
t
a
g
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


}
;




t
y
p
e
 
A
p
p
r
o
v
e
P
a
y
l
o
a
d
 
=
 
P
a
r
t
i
a
l
<
R
e
p
o
R
e
q
u
e
s
t
F
o
r
m
S
t
a
t
e
>
 
&
 
{


 
 
a
d
m
i
n
N
o
t
e
?
:
 
s
t
r
i
n
g
;


}
;




t
y
p
e
 
R
e
p
o
R
e
q
u
e
s
t
C
a
r
d
P
r
o
p
s
 
=
 
{


 
 
r
e
q
:
 
R
e
p
o
R
e
q
u
e
s
t
;


 
 
i
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
o
n
A
p
p
r
o
v
e
:
 
(
i
d
:
 
n
u
m
b
e
r
,
 
p
a
y
l
o
a
d
:
 
A
p
p
r
o
v
e
P
a
y
l
o
a
d
)
 
=
>
 
P
r
o
m
i
s
e
<
v
o
i
d
>
;


 
 
o
n
R
e
j
e
c
t
:
 
(
i
d
:
 
n
u
m
b
e
r
)
 
=
>
 
P
r
o
m
i
s
e
<
v
o
i
d
>
;


 
 
s
e
l
e
c
t
e
d
I
d
s
:
 
n
u
m
b
e
r
[
]
;


 
 
o
n
T
o
g
g
l
e
S
e
l
e
c
t
:
 
(
i
d
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


 
 
s
t
a
t
u
s
F
i
l
t
e
r
:
 
s
t
r
i
n
g
;


}
;




c
o
n
s
t
 
b
u
i
l
d
F
o
r
m
S
t
a
t
e
 
=
 
(
r
e
q
:
 
R
e
p
o
R
e
q
u
e
s
t
)
:
 
R
e
p
o
R
e
q
u
e
s
t
F
o
r
m
S
t
a
t
e
 
=
>
 
(
{


 
 
n
a
m
e
:
 
r
e
q
.
n
a
m
e
,


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
r
e
q
.
d
e
s
c
r
i
p
t
i
o
n
,


 
 
d
o
m
a
i
n
:
 
r
e
q
.
d
o
m
a
i
n
,


 
 
d
i
f
f
i
c
u
l
t
y
:
 
r
e
q
.
d
i
f
f
i
c
u
l
t
y
,


 
 
t
a
g
s
:
 
r
e
q
.
t
a
g
s
 
?
?
 
[
]
,


}
)
;




c
o
n
s
t
 
s
t
a
t
u
s
B
a
d
g
e
 
=
 
(
s
t
a
t
u
s
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
 
{


 
 
c
o
n
s
t
 
m
a
p
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
 
s
t
r
i
n
g
>
 
=
 
{


 
 
 
 
P
E
N
D
I
N
G
:
 
"
b
g
-
a
m
b
e
r
-
9
0
0
/
4
0
 
t
e
x
t
-
a
m
b
e
r
-
4
0
0
"
,


 
 
 
 
A
P
P
R
O
V
E
D
:
 
"
b
g
-
e
m
e
r
a
l
d
-
9
0
0
/
4
0
 
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
"
,


 
 
 
 
R
E
J
E
C
T
E
D
:
 
"
b
g
-
r
e
d
-
9
0
0
/
4
0
 
t
e
x
t
-
r
e
d
-
4
0
0
"
,


 
 
}
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
[
s
t
a
t
u
s
]
 
|
|
 
"
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
4
0
0
"
;


}
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
 
A
d
m
i
n
R
e
p
o
R
e
q
u
e
s
t
s
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
r
e
q
u
e
s
t
s
,
 
s
e
t
R
e
q
u
e
s
t
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
<
R
e
p
o
R
e
q
u
e
s
t
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
p
a
g
i
n
a
t
i
o
n
,
 
s
e
t
P
a
g
i
n
a
t
i
o
n
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
a
g
i
n
a
t
i
o
n
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
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
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
s
t
a
t
u
s
F
i
l
t
e
r
,
 
s
e
t
S
t
a
t
u
s
F
i
l
t
e
r
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
"
P
E
N
D
I
N
G
"
)
;


c
o
n
s
t
 
[
d
o
m
a
i
n
F
i
l
t
e
r
,
 
s
e
t
D
o
m
a
i
n
F
i
l
t
e
r
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
"
"
)
;


c
o
n
s
t
 
[
d
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
,
 
s
e
t
D
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
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
"
"
)
;


c
o
n
s
t
 
[
p
a
g
e
,
 
s
e
t
P
a
g
e
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
1
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
I
d
s
,
 
s
e
t
S
e
l
e
c
t
e
d
I
d
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
<
n
u
m
b
e
r
[
]
>
(
[
]
)
;




 
 
c
o
n
s
t
 
f
e
t
c
h
R
e
q
u
e
s
t
s
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
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
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
"
/
o
p
e
n
s
o
u
r
c
e
/
r
e
q
u
e
s
t
s
/
a
l
l
"
,
 
{


 
 
p
a
r
a
m
s
:
 
{


 
 
 
 
s
t
a
t
u
s
:
 
s
t
a
t
u
s
F
i
l
t
e
r
,


 
 
 
 
d
o
m
a
i
n
:
 
d
o
m
a
i
n
F
i
l
t
e
r
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
d
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
,


 
 
 
 
p
a
g
e
,


 
 
 
 
l
i
m
i
t
:
 
2
0
,


 
 
}
,


}
)
;


 
 
 
 
 
 
s
e
t
R
e
q
u
e
s
t
s
(
r
e
s
.
d
a
t
a
.
r
e
q
u
e
s
t
s
)
;


 
 
 
 
 
 
s
e
t
P
a
g
i
n
a
t
i
o
n
(
r
e
s
.
d
a
t
a
.
p
a
g
i
n
a
t
i
o
n
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
l
o
a
d
 
r
e
p
o
 
r
e
q
u
e
s
t
s
"
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
/
/
 
F
e
t
c
h
 
w
h
e
n
e
v
e
r
 
f
i
l
t
e
r
s
 
o
r
 
p
a
g
e
 
c
h
a
n
g
e
s


 
 
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


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
f
e
t
c
h
R
e
q
u
e
s
t
s
(
)
;


 
 
 
 
/
/
 
S
e
l
e
c
t
i
o
n
 
i
s
 
c
l
e
a
r
e
d
 
w
h
e
n
 
p
a
g
e
 
o
r
 
f
i
l
t
e
r
s
 
c
h
a
n
g
e
 
b
e
c
a
u
s
e
 
t
h
e
 
l
i
s
t
 
i
t
e
m
s
 
c
h
a
n
g
e


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
I
d
s
(
[
]
)
;


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


 
 
}
,
 
[
s
t
a
t
u
s
F
i
l
t
e
r
,
 
d
o
m
a
i
n
F
i
l
t
e
r
,
 
d
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
,
 
p
a
g
e
]
)
;




 
 
/
/
 
R
e
s
e
t
 
p
a
g
e
 
t
o
 
1
 
w
h
e
n
 
f
i
l
t
e
r
s
 
c
h
a
n
g
e


 
 
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
F
i
l
t
e
r
C
h
a
n
g
e
 
=
 
(
s
e
t
t
e
r
:
 
(
v
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
 
v
o
i
d
,
 
v
a
l
u
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
 
{


 
 
 
 
s
e
t
t
e
r
(
v
a
l
u
e
)
;


 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
}
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
S
e
l
e
c
t
 
=
 
(
i
d
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
I
d
s
(
(
p
r
e
v
)
 
=
>


 
 
 
 
 
 
p
r
e
v
.
i
n
c
l
u
d
e
s
(
i
d
)
 
?
 
p
r
e
v
.
f
i
l
t
e
r
(
(
i
t
e
m
)
 
=
>
 
i
t
e
m
 
!
=
=
 
i
d
)
 
:
 
[
.
.
.
p
r
e
v
,
 
i
d
]


 
 
 
 
)
;


 
 
}
;




 
 
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
S
e
l
e
c
t
A
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
 
p
e
n
d
i
n
g
O
n
P
a
g
e
 
=
 
r
e
q
u
e
s
t
s
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
r
.
s
t
a
t
u
s
 
=
=
=
 
"
P
E
N
D
I
N
G
"
)
.
m
a
p
(
(
r
)
 
=
>
 
r
.
i
d
)
;


 
 
 
 
c
o
n
s
t
 
a
l
l
S
e
l
e
c
t
e
d
 
=
 
p
e
n
d
i
n
g
O
n
P
a
g
e
.
e
v
e
r
y
(
(
i
d
)
 
=
>
 
s
e
l
e
c
t
e
d
I
d
s
.
i
n
c
l
u
d
e
s
(
i
d
)
)
;


 
 
 
 
i
f
 
(
a
l
l
S
e
l
e
c
t
e
d
)
 
{


 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
I
d
s
(
(
p
r
e
v
)
 
=
>
 
p
r
e
v
.
f
i
l
t
e
r
(
(
i
d
)
 
=
>
 
!
p
e
n
d
i
n
g
O
n
P
a
g
e
.
i
n
c
l
u
d
e
s
(
i
d
)
)
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
I
d
s
(
(
p
r
e
v
)
 
=
>
 
A
r
r
a
y
.
f
r
o
m
(
n
e
w
 
S
e
t
(
[
.
.
.
p
r
e
v
,
 
.
.
.
p
e
n
d
i
n
g
O
n
P
a
g
e
]
)
)
)
;


 
 
 
 
}


 
 
}
;




 
 
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
A
p
p
r
o
v
e
 
=
 
a
s
y
n
c
 
(
i
d
:
 
n
u
m
b
e
r
,
 
p
a
y
l
o
a
d
:
 
A
p
p
r
o
v
e
P
a
y
l
o
a
d
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
u
t
(
`
/
o
p
e
n
s
o
u
r
c
e
/
r
e
q
u
e
s
t
s
/
$
{
i
d
}
/
a
p
p
r
o
v
e
`
,
 
p
a
y
l
o
a
d
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
R
e
q
u
e
s
t
 
a
p
p
r
o
v
e
d
,
 
r
e
p
o
 
a
d
d
e
d
 
t
o
 
d
i
r
e
c
t
o
r
y
"
)
;


 
 
 
 
 
 
f
e
t
c
h
R
e
q
u
e
s
t
s
(
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
a
p
p
r
o
v
e
 
r
e
q
u
e
s
t
"
)
;


 
 
 
 
}


 
 
}
;




 
 
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
R
e
j
e
c
t
 
=
 
a
s
y
n
c
 
(
i
d
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
u
t
(
`
/
o
p
e
n
s
o
u
r
c
e
/
r
e
q
u
e
s
t
s
/
$
{
i
d
}
/
r
e
j
e
c
t
`
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
R
e
q
u
e
s
t
 
r
e
j
e
c
t
e
d
"
)
;


 
 
 
 
 
 
f
e
t
c
h
R
e
q
u
e
s
t
s
(
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
r
e
j
e
c
t
 
r
e
q
u
e
s
t
"
)
;


 
 
 
 
}


 
 
}
;




 
 
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
B
u
l
k
A
p
p
r
o
v
e
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
I
d
s
.
l
e
n
g
t
h
 
=
=
=
 
0
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


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
u
t
(
"
/
o
p
e
n
s
o
u
r
c
e
/
r
e
q
u
e
s
t
s
/
b
u
l
k
"
,
 
{
 
i
d
s
:
 
s
e
l
e
c
t
e
d
I
d
s
,
 
a
c
t
i
o
n
:
 
"
a
p
p
r
o
v
e
"
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
`
S
u
c
c
e
s
s
f
u
l
l
y
 
a
p
p
r
o
v
e
d
 
$
{
s
e
l
e
c
t
e
d
I
d
s
.
l
e
n
g
t
h
}
 
r
e
p
o
s
i
t
o
r
i
e
s
`
)
;


 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
I
d
s
(
[
]
)
;


 
 
 
 
 
 
f
e
t
c
h
R
e
q
u
e
s
t
s
(
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
a
p
p
r
o
v
e
 
s
e
l
e
c
t
e
d
 
r
e
q
u
e
s
t
s
"
)
;


 
 
 
 
}


 
 
}
;




 
 
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
B
u
l
k
R
e
j
e
c
t
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
I
d
s
.
l
e
n
g
t
h
 
=
=
=
 
0
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


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
u
t
(
"
/
o
p
e
n
s
o
u
r
c
e
/
r
e
q
u
e
s
t
s
/
b
u
l
k
"
,
 
{
 
i
d
s
:
 
s
e
l
e
c
t
e
d
I
d
s
,
 
a
c
t
i
o
n
:
 
"
r
e
j
e
c
t
"
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
`
S
u
c
c
e
s
s
f
u
l
l
y
 
r
e
j
e
c
t
e
d
 
$
{
s
e
l
e
c
t
e
d
I
d
s
.
l
e
n
g
t
h
}
 
r
e
q
u
e
s
t
s
`
)
;


 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
I
d
s
(
[
]
)
;


 
 
 
 
 
 
f
e
t
c
h
R
e
q
u
e
s
t
s
(
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
r
e
j
e
c
t
 
s
e
l
e
c
t
e
d
 
r
e
q
u
e
s
t
s
"
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
s
t
a
t
u
s
T
a
b
s
 
=
 
[
"
P
E
N
D
I
N
G
"
,
 
"
A
P
P
R
O
V
E
D
"
,
 
"
R
E
J
E
C
T
E
D
"
]
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
>


 
 
 
 
 
 
<
S
E
O
 
t
i
t
l
e
=
"
R
e
p
o
 
R
e
q
u
e
s
t
s
"
 
n
o
I
n
d
e
x
 
/
>


 
 
 
 
 
 
<
h
1
 
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
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
w
h
i
t
e
 
m
b
-
6
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
<
G
i
t
P
u
l
l
R
e
q
u
e
s
t
 
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
w
-
6
 
h
-
6
"
 
/
>
 
R
e
p
o
 
R
e
q
u
e
s
t
s


 
 
 
 
 
 
<
/
h
1
>




 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
s
 
T
a
b
s
 
*
/
}


 
 
 
 
 
 
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
l
e
x
 
g
a
p
-
2
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
{
s
t
a
t
u
s
T
a
b
s
.
m
a
p
(
(
s
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
k
e
y
=
{
s
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
h
a
n
d
l
e
F
i
l
t
e
r
C
h
a
n
g
e
(
s
e
t
S
t
a
t
u
s
F
i
l
t
e
r
,
 
s
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
p
x
-
4
 
p
y
-
2
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
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
c
o
l
o
r
s
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s
F
i
l
t
e
r
 
=
=
=
 
s
 
?
 
"
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
 
t
e
x
t
-
w
h
i
t
e
"
 
:
 
"
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
g
i
n
a
t
i
o
n
 
&
&
 
s
t
a
t
u
s
F
i
l
t
e
r
 
=
=
=
 
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
m
l
-
1
.
5
 
t
e
x
t
-
x
s
 
o
p
a
c
i
t
y
-
7
0
"
>
(
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
}
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


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
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
3
 
m
b
-
6
"
>


 
 
<
s
e
l
e
c
t


 
 
 
 
v
a
l
u
e
=
{
d
o
m
a
i
n
F
i
l
t
e
r
}


 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
h
a
n
d
l
e
F
i
l
t
e
r
C
h
a
n
g
e
(
s
e
t
D
o
m
a
i
n
F
i
l
t
e
r
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
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
p
x
-
3
 
p
y
-
2
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
g
r
a
y
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
t
e
x
t
-
s
m
"


 
 
>


 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
"
>
A
l
l
 
D
o
m
a
i
n
s
<
/
o
p
t
i
o
n
>


 
 
 
 
{
D
O
M
A
I
N
_
O
P
T
I
O
N
S
.
m
a
p
(
(
d
o
m
a
i
n
)
 
=
>
 
(


 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
d
o
m
a
i
n
}
 
v
a
l
u
e
=
{
d
o
m
a
i
n
}
>


 
 
 
 
 
 
 
 
{
d
o
m
a
i
n
}


 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
)
)
}


 
 
<
/
s
e
l
e
c
t
>




 
 
<
s
e
l
e
c
t


 
 
 
 
v
a
l
u
e
=
{
d
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
}


 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
h
a
n
d
l
e
F
i
l
t
e
r
C
h
a
n
g
e
(
s
e
t
D
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
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
p
x
-
3
 
p
y
-
2
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
g
r
a
y
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
t
e
x
t
-
s
m
"


 
 
>


 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
"
>
A
l
l
 
D
i
f
f
i
c
u
l
t
i
e
s
<
/
o
p
t
i
o
n
>


 
 
 
 
{
D
I
F
F
I
C
U
L
T
Y
_
O
P
T
I
O
N
S
.
m
a
p
(
(
d
i
f
f
i
c
u
l
t
y
)
 
=
>
 
(


 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
d
i
f
f
i
c
u
l
t
y
}
 
v
a
l
u
e
=
{
d
i
f
f
i
c
u
l
t
y
}
>


 
 
 
 
 
 
 
 
{
d
i
f
f
i
c
u
l
t
y
}


 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
)
)
}


 
 
<
/
s
e
l
e
c
t
>


<
/
d
i
v
>






 
 
 
 
 
 
{
s
t
a
t
u
s
F
i
l
t
e
r
 
=
=
=
 
"
P
E
N
D
I
N
G
"
 
&
&
 
r
e
q
u
e
s
t
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
m
b
-
6
 
b
g
-
g
r
a
y
-
8
0
0
/
4
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
p
-
3
 
r
o
u
n
d
e
d
-
l
g
 
w
-
f
i
t
"
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
c
h
e
c
k
b
o
x
"


 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
s
e
l
e
c
t
A
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
4
 
h
-
4
 
r
o
u
n
d
e
d
-
s
m
 
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
b
g
-
g
r
a
y
-
9
0
0
 
t
e
x
t
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
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
 
f
o
c
u
s
:
r
i
n
g
-
o
f
f
s
e
t
-
g
r
a
y
-
9
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
u
e
s
t
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
u
e
s
t
s
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
r
.
s
t
a
t
u
s
 
=
=
=
 
"
P
E
N
D
I
N
G
"
)
.
m
a
p
(
(
r
)
 
=
>
 
r
.
i
d
)
.
e
v
e
r
y
(
(
i
d
)
 
=
>
 
s
e
l
e
c
t
e
d
I
d
s
.
i
n
c
l
u
d
e
s
(
i
d
)
)


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
h
a
n
d
l
e
S
e
l
e
c
t
A
l
l
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
s
e
l
e
c
t
A
l
l
"
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
f
o
n
t
-
m
e
d
i
u
m
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
s
e
l
e
c
t
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
S
e
l
e
c
t
 
A
l
l
 
o
n
 
t
h
i
s
 
p
a
g
e


 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
/
>


 
 
 
 
 
 
)
 
:
 
r
e
q
u
e
s
t
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
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
t
e
x
t
-
c
e
n
t
e
r
 
p
y
-
2
0
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
C
l
o
c
k
 
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
w
-
1
0
 
h
-
1
0
 
m
x
-
a
u
t
o
 
m
b
-
3
 
o
p
a
c
i
t
y
-
4
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
p
>
N
o
 
{
s
t
a
t
u
s
F
i
l
t
e
r
.
t
o
L
o
w
e
r
C
a
s
e
(
)
}
 
r
e
q
u
e
s
t
s
<
/
p
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
 
:
 
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
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
r
e
q
u
e
s
t
s
.
m
a
p
(
(
r
e
q
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
p
o
R
e
q
u
e
s
t
C
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
e
q
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
=
{
r
e
q
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
d
e
x
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
r
o
v
e
=
{
h
a
n
d
l
e
A
p
p
r
o
v
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
e
j
e
c
t
=
{
h
a
n
d
l
e
R
e
j
e
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
l
e
c
t
e
d
I
d
s
=
{
s
e
l
e
c
t
e
d
I
d
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
T
o
g
g
l
e
S
e
l
e
c
t
=
{
t
o
g
g
l
e
S
e
l
e
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s
F
i
l
t
e
r
=
{
s
t
a
t
u
s
F
i
l
t
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
{
p
a
g
i
n
a
t
i
o
n
 
&
&
 
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
 
>
 
1
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
P
a
g
e
=
{
p
a
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
t
a
l
P
a
g
e
s
=
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
P
a
g
e
C
h
a
n
g
e
=
{
s
e
t
P
a
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
B
u
l
k
 
A
c
t
i
o
n
 
T
o
o
l
b
a
r
 
*
/
}


 
 
 
 
 
 
{
s
e
l
e
c
t
e
d
I
d
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
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
 
b
o
t
t
o
m
-
6
 
l
e
f
t
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
x
-
1
/
2
 
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
p
x
-
6
 
p
y
-
4
 
r
o
u
n
d
e
d
-
x
l
 
s
h
a
d
o
w
-
x
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
4
 
z
-
5
0
 
a
n
i
m
a
t
e
-
i
n
 
f
a
d
e
-
i
n
 
s
l
i
d
e
-
i
n
-
f
r
o
m
-
b
o
t
t
o
m
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
s
h
r
i
n
k
-
0
 
s
e
l
e
c
t
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
e
c
t
e
d
I
d
s
.
l
e
n
g
t
h
}
 
{
s
e
l
e
c
t
e
d
I
d
s
.
l
e
n
g
t
h
 
=
=
=
 
1
 
?
 
"
r
e
q
u
e
s
t
"
 
:
 
"
r
e
q
u
e
s
t
s
"
}
 
s
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
d
e
s
t
r
u
c
t
i
v
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
s
h
r
i
n
k
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
B
u
l
k
R
e
j
e
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
R
e
j
e
c
t
 
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
s
h
r
i
n
k
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
B
u
l
k
A
p
p
r
o
v
e
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
A
p
p
r
o
v
e
 
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
S
e
l
e
c
t
e
d
I
d
s
(
[
]
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
w
h
i
t
e
 
f
o
n
t
-
m
e
d
i
u
m
 
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
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
s
h
r
i
n
k
-
0
 
s
e
l
e
c
t
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
D
e
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




c
o
n
s
t
 
R
e
p
o
R
e
q
u
e
s
t
C
a
r
d
 
=
 
R
e
a
c
t
.
m
e
m
o
(
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
p
o
R
e
q
u
e
s
t
C
a
r
d
(
{


 
 
r
e
q
,


 
 
i
n
d
e
x
,


 
 
o
n
A
p
p
r
o
v
e
,


 
 
o
n
R
e
j
e
c
t
,


 
 
s
e
l
e
c
t
e
d
I
d
s
,


 
 
o
n
T
o
g
g
l
e
S
e
l
e
c
t
,


 
 
s
t
a
t
u
s
F
i
l
t
e
r
,


}
:
 
R
e
p
o
R
e
q
u
e
s
t
C
a
r
d
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
[
i
s
E
d
i
t
i
n
g
,
 
s
e
t
I
s
E
d
i
t
i
n
g
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
f
o
r
m
S
t
a
t
e
,
 
s
e
t
F
o
r
m
S
t
a
t
e
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
R
e
p
o
R
e
q
u
e
s
t
F
o
r
m
S
t
a
t
e
>
(
(
)
 
=
>
 
b
u
i
l
d
F
o
r
m
S
t
a
t
e
(
r
e
q
)
)
;


 
 
c
o
n
s
t
 
[
a
d
m
i
n
N
o
t
e
,
 
s
e
t
A
d
m
i
n
N
o
t
e
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
r
e
q
.
a
d
m
i
n
N
o
t
e
 
?
?
 
"
"
)
;


 
 
c
o
n
s
t
 
[
t
a
g
s
I
n
p
u
t
,
 
s
e
t
T
a
g
s
I
n
p
u
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
(
)
 
=
>
 
(
r
e
q
.
t
a
g
s
 
?
?
 
[
]
)
.
j
o
i
n
(
"
,
 
"
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


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
F
o
r
m
S
t
a
t
e
(
b
u
i
l
d
F
o
r
m
S
t
a
t
e
(
r
e
q
)
)
;


 
 
 
 
s
e
t
T
a
g
s
I
n
p
u
t
(
(
r
e
q
.
t
a
g
s
 
?
?
 
[
]
)
.
j
o
i
n
(
"
,
 
"
)
)
;


 
 
 
 
s
e
t
A
d
m
i
n
N
o
t
e
(
r
e
q
.
a
d
m
i
n
N
o
t
e
 
?
?
 
"
"
)
;


 
 
 
 
s
e
t
I
s
E
d
i
t
i
n
g
(
f
a
l
s
e
)
;


 
 
}
,
 
[
r
e
q
]
)
;




 
 
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
A
p
p
r
o
v
e
C
l
i
c
k
 
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
 
p
a
y
l
o
a
d
:
 
A
p
p
r
o
v
e
P
a
y
l
o
a
d
 
=
 
{
}
;


 
 
 
 
c
o
n
s
t
 
t
r
i
m
m
e
d
N
o
t
e
 
=
 
a
d
m
i
n
N
o
t
e
.
t
r
i
m
(
)
;


 
 
 
 
i
f
 
(
t
r
i
m
m
e
d
N
o
t
e
)
 
{


 
 
 
 
 
 
p
a
y
l
o
a
d
.
a
d
m
i
n
N
o
t
e
 
=
 
t
r
i
m
m
e
d
N
o
t
e
;


 
 
 
 
}




 
 
 
 
i
f
 
(
i
s
E
d
i
t
i
n
g
)
 
{


 
 
 
 
 
 
p
a
y
l
o
a
d
.
n
a
m
e
 
=
 
f
o
r
m
S
t
a
t
e
.
n
a
m
e
.
t
r
i
m
(
)
;


 
 
 
 
 
 
p
a
y
l
o
a
d
.
d
e
s
c
r
i
p
t
i
o
n
 
=
 
f
o
r
m
S
t
a
t
e
.
d
e
s
c
r
i
p
t
i
o
n
.
t
r
i
m
(
)
;


 
 
 
 
 
 
p
a
y
l
o
a
d
.
d
o
m
a
i
n
 
=
 
f
o
r
m
S
t
a
t
e
.
d
o
m
a
i
n
;


 
 
 
 
 
 
p
a
y
l
o
a
d
.
d
i
f
f
i
c
u
l
t
y
 
=
 
f
o
r
m
S
t
a
t
e
.
d
i
f
f
i
c
u
l
t
y
;


 
 
 
 
 
 
p
a
y
l
o
a
d
.
t
a
g
s
 
=
 
t
a
g
s
I
n
p
u
t


 
 
 
 
 
 
 
 
.
s
p
l
i
t
(
"
,
"
)


 
 
 
 
 
 
 
 
.
m
a
p
(
(
t
a
g
)
 
=
>
 
t
a
g
.
t
r
i
m
(
)
)


 
 
 
 
 
 
 
 
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;


 
 
 
 
}




 
 
 
 
v
o
i
d
 
o
n
A
p
p
r
o
v
e
(
r
e
q
.
i
d
,
 
p
a
y
l
o
a
d
)
;


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
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
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
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
e
l
a
y
:
 
i
n
d
e
x
 
*
 
0
.
0
3
 
}
}


 
 
 
 
 
 
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
b
g
-
g
r
a
y
-
8
0
0
/
5
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
-
5
 
f
l
e
x
 
g
a
p
-
4
"


 
 
 
 
>


 
 
 
 
 
 
{
s
t
a
t
u
s
F
i
l
t
e
r
 
=
=
=
 
"
P
E
N
D
I
N
G
"
 
&
&
 
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
p
t
-
1
.
5
 
s
e
l
e
c
t
-
n
o
n
e
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
c
h
e
c
k
b
o
x
"


 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
=
{
s
e
l
e
c
t
e
d
I
d
s
.
i
n
c
l
u
d
e
s
(
r
e
q
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
)
 
=
>
 
o
n
T
o
g
g
l
e
S
e
l
e
c
t
(
r
e
q
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
4
 
h
-
4
 
r
o
u
n
d
e
d
-
s
m
 
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
b
g
-
g
r
a
y
-
9
0
0
 
t
e
x
t
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
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
 
f
o
c
u
s
:
r
i
n
g
-
o
f
f
s
e
t
-
g
r
a
y
-
9
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
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
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
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
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
w
h
i
t
e
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
q
.
o
w
n
e
r
}
/
{
i
s
E
d
i
t
i
n
g
 
?
 
f
o
r
m
S
t
a
t
e
.
n
a
m
e
 
:
 
r
e
q
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
{
`
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
u
p
p
e
r
c
a
s
e
 
$
{
s
t
a
t
u
s
B
a
d
g
e
(
r
e
q
.
s
t
a
t
u
s
)
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
q
.
s
t
a
t
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
!
i
s
E
d
i
t
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
l
i
n
e
-
c
l
a
m
p
-
2
"
>
{
r
e
q
.
d
e
s
c
r
i
p
t
i
o
n
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
r
e
q
.
u
r
l
}


 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
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
s
h
r
i
n
k
-
0
 
w
-
8
 
h
-
8
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
g
r
a
y
-
7
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
6
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
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
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
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
 
/
>


 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
i
s
E
d
i
t
i
n
g
 
&
&
 
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
m
b
-
4
 
g
r
i
d
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>
R
e
p
o
s
i
t
o
r
y
 
n
a
m
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
S
t
a
t
e
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
v
e
n
t
)
 
=
>
 
s
e
t
F
o
r
m
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
n
a
m
e
:
 
e
v
e
n
t
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
b
g
-
g
r
a
y
-
9
0
0
/
6
0
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
2
0
0
 
p
l
a
c
e
h
o
l
d
e
r
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
R
e
p
o
s
i
t
o
r
y
 
n
a
m
e
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>
D
e
s
c
r
i
p
t
i
o
n
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
S
t
a
t
e
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
v
e
n
t
)
 
=
>
 
s
e
t
F
o
r
m
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
d
e
s
c
r
i
p
t
i
o
n
:
 
e
v
e
n
t
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
b
g
-
g
r
a
y
-
9
0
0
/
6
0
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
2
0
0
 
p
l
a
c
e
h
o
l
d
e
r
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
h
o
r
t
 
d
e
s
c
r
i
p
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
g
a
p
-
3
 
m
d
:
g
r
i
d
-
c
o
l
s
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>
D
o
m
a
i
n
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
S
t
a
t
e
.
d
o
m
a
i
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
v
e
n
t
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
F
o
r
m
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
d
o
m
a
i
n
:
 
e
v
e
n
t
.
t
a
r
g
e
t
.
v
a
l
u
e
 
a
s
 
R
e
p
o
D
o
m
a
i
n
 
}
)
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
b
g
-
g
r
a
y
-
9
0
0
/
6
0
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
2
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
D
O
M
A
I
N
_
O
P
T
I
O
N
S
.
m
a
p
(
(
o
p
t
i
o
n
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
o
p
t
i
o
n
}
 
v
a
l
u
e
=
{
o
p
t
i
o
n
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>
D
i
f
f
i
c
u
l
t
y
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
S
t
a
t
e
.
d
i
f
f
i
c
u
l
t
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
v
e
n
t
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
F
o
r
m
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
d
i
f
f
i
c
u
l
t
y
:
 
e
v
e
n
t
.
t
a
r
g
e
t
.
v
a
l
u
e
 
a
s
 
R
e
p
o
D
i
f
f
i
c
u
l
t
y
 
}
)
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
b
g
-
g
r
a
y
-
9
0
0
/
6
0
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
2
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
D
I
F
F
I
C
U
L
T
Y
_
O
P
T
I
O
N
S
.
m
a
p
(
(
o
p
t
i
o
n
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
o
p
t
i
o
n
}
 
v
a
l
u
e
=
{
o
p
t
i
o
n
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>
T
a
g
s
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
t
a
g
s
I
n
p
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
T
a
g
s
I
n
p
u
t
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
b
g
-
g
r
a
y
-
9
0
0
/
6
0
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
2
0
0
 
p
l
a
c
e
h
o
l
d
e
r
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
B
e
g
i
n
n
e
r
 
f
r
i
e
n
d
l
y
,
 
h
a
c
k
t
o
b
e
r
f
e
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>
S
e
p
a
r
a
t
e
 
t
a
g
s
 
w
i
t
h
 
c
o
m
m
a
s
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
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
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
 
m
b
-
3
 
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
p
x
-
2
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
{
r
e
q
.
l
a
n
g
u
a
g
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
p
x
-
2
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
{
i
s
E
d
i
t
i
n
g
 
?
 
f
o
r
m
S
t
a
t
e
.
d
o
m
a
i
n
 
:
 
r
e
q
.
d
o
m
a
i
n
}


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
p
x
-
2
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
{
i
s
E
d
i
t
i
n
g
 
?
 
f
o
r
m
S
t
a
t
e
.
d
i
f
f
i
c
u
l
t
y
 
:
 
r
e
q
.
d
i
f
f
i
c
u
l
t
y
}


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
r
e
q
.
t
e
c
h
S
t
a
c
k
.
m
a
p
(
(
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
t
}
 
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
p
x
-
2
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
p
u
r
p
l
e
-
9
0
0
/
3
0
 
t
e
x
t
-
p
u
r
p
l
e
-
4
0
0
"
>
{
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
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
m
b
-
3
 
p
-
3
 
b
g
-
g
r
a
y
-
9
0
0
/
5
0
 
r
o
u
n
d
e
d
-
l
g
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
"
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
m
b
-
1
"
>
W
h
y
 
t
h
i
s
 
r
e
p
o
?
<
/
p
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
{
r
e
q
.
r
e
a
s
o
n
}
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
r
e
q
.
s
t
a
t
u
s
 
=
=
=
 
"
P
E
N
D
I
N
G
"
 
&
&
 
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
m
b
-
3
 
g
r
i
d
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>
A
d
m
i
n
 
n
o
t
e
 
(
o
p
t
i
o
n
a
l
)
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
a
d
m
i
n
N
o
t
e
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
v
e
n
t
)
 
=
>
 
s
e
t
A
d
m
i
n
N
o
t
e
(
e
v
e
n
t
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
2
}


 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
b
g
-
g
r
a
y
-
9
0
0
/
6
0
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
2
0
0
 
p
l
a
c
e
h
o
l
d
e
r
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
A
d
d
 
a
 
n
o
t
e
 
f
o
r
 
t
h
e
 
s
t
u
d
e
n
t
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
"
>


 
 
 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
 
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
r
e
q
.
u
s
e
r
?
.
n
a
m
e
 
|
|
 
"
U
n
k
n
o
w
n
"
}
 
(
{
r
e
q
.
u
s
e
r
?
.
e
m
a
i
l
}
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
m
x
-
1
"
>
-
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
n
e
w
 
D
a
t
e
(
r
e
q
.
c
r
e
a
t
e
d
A
t
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
)
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
r
e
q
.
s
t
a
t
u
s
 
=
=
=
 
"
P
E
N
D
I
N
G
"
 
&
&
 
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
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
I
s
E
d
i
t
i
n
g
(
(
p
r
e
v
)
 
=
>
 
!
p
r
e
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
s
e
c
o
n
d
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
E
d
i
t
i
n
g
 
?
 
"
C
a
n
c
e
l
 
e
d
i
t
i
n
g
"
 
:
 
"
E
d
i
t
 
b
e
f
o
r
e
 
a
p
p
r
o
v
i
n
g
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
v
o
i
d
 
o
n
R
e
j
e
c
t
(
r
e
q
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
4
0
0
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
h
o
v
e
r
:
b
g
-
r
e
d
-
9
0
0
/
5
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
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
R
e
j
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
A
p
p
r
o
v
e
C
l
i
c
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
e
m
e
r
a
l
d
-
9
0
0
/
3
0
 
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
h
o
v
e
r
:
b
g
-
e
m
e
r
a
l
d
-
9
0
0
/
5
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
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
A
p
p
r
o
v
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
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
>


 
 
)
;


}
)
;


