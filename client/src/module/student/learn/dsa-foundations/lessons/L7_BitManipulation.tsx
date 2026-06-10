
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
M
e
m
o
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
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
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
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
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
 
=
 
"
b
i
t
-
m
a
n
i
p
u
l
a
t
i
o
n
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
C
o
r
e
 
t
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
O
p
 
=
 
"
A
N
D
"
 
|
 
"
O
R
"
 
|
 
"
X
O
R
"
 
|
 
"
N
O
T
"
 
|
 
"
S
H
L
"
 
|
 
"
S
H
R
"
;




i
n
t
e
r
f
a
c
e
 
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
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
 
|
 
n
u
m
b
e
r
 
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
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
a
:
 
n
u
m
b
e
r
;


 
 
b
:
 
n
u
m
b
e
r
;


 
 
r
e
s
u
l
t
:
 
n
u
m
b
e
r
;


 
 
a
c
t
i
v
e
B
i
t
?
:
 
n
u
m
b
e
r
;


 
 
h
i
g
h
l
i
g
h
t
K
e
y
?
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
m
o
:
 
"
o
p
"
 
|
 
"
p
o
w
e
r
2
"
 
|
 
"
p
o
p
c
o
u
n
t
"
 
|
 
"
x
o
r
-
a
r
r
a
y
"
 
|
 
"
s
u
b
s
e
t
s
"
;


 
 
a
r
r
?
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


 
 
a
r
r
I
d
x
?
:
 
n
u
m
b
e
r
;


 
 
a
c
c
u
m
u
l
a
t
o
r
?
:
 
n
u
m
b
e
r
;


 
 
s
u
b
s
e
t
I
n
d
e
x
?
:
 
n
u
m
b
e
r
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
H
e
l
p
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
B
I
T
S
 
=
 
8
;


c
o
n
s
t
 
M
A
X
 
=
 
2
5
5
;




f
u
n
c
t
i
o
n
 
t
o
B
i
t
s
(
n
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
[
]
 
{


 
 
c
o
n
s
t
 
x
 
=
 
(
(
n
 
%
 
2
5
6
)
 
+
 
2
5
6
)
 
%
 
2
5
6
;


 
 
r
e
t
u
r
n
 
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
{
 
l
e
n
g
t
h
:
 
B
I
T
S
 
}
,
 
(
_
,
 
i
)
 
=
>
 
(
x
 
>
>
 
(
B
I
T
S
 
-
 
1
 
-
 
i
)
)
 
&
 
1
)
;


}




f
u
n
c
t
i
o
n
 
a
p
p
l
y
O
p
(
o
p
:
 
O
p
,
 
a
:
 
n
u
m
b
e
r
,
 
b
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
 
{


 
 
s
w
i
t
c
h
 
(
o
p
)
 
{


 
 
 
 
c
a
s
e
 
"
A
N
D
"
:
 
r
e
t
u
r
n
 
(
a
 
&
 
b
)
 
&
 
M
A
X
;


 
 
 
 
c
a
s
e
 
"
O
R
"
:
 
 
r
e
t
u
r
n
 
(
a
 
|
 
b
)
 
&
 
M
A
X
;


 
 
 
 
c
a
s
e
 
"
X
O
R
"
:
 
r
e
t
u
r
n
 
(
a
 
^
 
b
)
 
&
 
M
A
X
;


 
 
 
 
c
a
s
e
 
"
N
O
T
"
:
 
r
e
t
u
r
n
 
(
~
a
)
 
&
 
M
A
X
;


 
 
 
 
c
a
s
e
 
"
S
H
L
"
:
 
r
e
t
u
r
n
 
(
a
 
<
<
 
(
b
 
&
 
7
)
)
 
&
 
M
A
X
;


 
 
 
 
c
a
s
e
 
"
S
H
R
"
:
 
r
e
t
u
r
n
 
(
a
 
>
>
 
(
b
 
&
 
7
)
)
 
&
 
M
A
X
;


 
 
}


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
b
u
i
l
d
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
P
S
E
U
D
O
_
O
P
:
 
R
e
c
o
r
d
<
O
p
,
 
s
t
r
i
n
g
[
]
>
 
=
 
{


 
 
A
N
D
:
 
[
"
#
 
B
i
t
w
i
s
e
 
A
N
D
 
(
c
o
l
u
m
n
-
w
i
s
e
)
"
,
 
"
f
o
r
 
b
i
t
 
i
 
f
r
o
m
 
7
 
d
o
w
n
 
t
o
 
0
:
"
,
 
"
 
 
r
[
i
]
 
<
-
 
a
[
i
]
 
A
N
D
 
b
[
i
]
"
]
,


 
 
O
R
:
 
 
[
"
#
 
B
i
t
w
i
s
e
 
O
R
 
(
c
o
l
u
m
n
-
w
i
s
e
)
"
,
 
 
"
f
o
r
 
b
i
t
 
i
 
f
r
o
m
 
7
 
d
o
w
n
 
t
o
 
0
:
"
,
 
"
 
 
r
[
i
]
 
<
-
 
a
[
i
]
 
O
R
 
b
[
i
]
"
]
,


 
 
X
O
R
:
 
[
"
#
 
B
i
t
w
i
s
e
 
X
O
R
 
(
c
o
l
u
m
n
-
w
i
s
e
)
"
,
 
"
f
o
r
 
b
i
t
 
i
 
f
r
o
m
 
7
 
d
o
w
n
 
t
o
 
0
:
"
,
 
"
 
 
r
[
i
]
 
<
-
 
a
[
i
]
 
X
O
R
 
b
[
i
]
"
]
,


 
 
N
O
T
:
 
[
"
#
 
B
i
t
w
i
s
e
 
N
O
T
"
,
 
"
f
o
r
 
b
i
t
 
i
 
f
r
o
m
 
7
 
d
o
w
n
 
t
o
 
0
:
"
,
 
"
 
 
r
[
i
]
 
<
-
 
1
 
-
 
a
[
i
]
"
]
,


 
 
S
H
L
:
 
[
"
#
 
S
h
i
f
t
 
L
e
f
t
 
b
y
 
b
"
,
 
"
s
h
i
f
t
 
a
l
l
 
b
i
t
s
 
l
e
f
t
 
b
y
 
b
:
"
,
 
"
 
 
r
 
<
-
 
(
a
 
<
<
 
b
)
 
&
 
0
x
F
F
"
]
,


 
 
S
H
R
:
 
[
"
#
 
S
h
i
f
t
 
R
i
g
h
t
 
b
y
 
b
"
,
 
"
s
h
i
f
t
 
a
l
l
 
b
i
t
s
 
r
i
g
h
t
 
b
y
 
b
:
"
,
 
"
 
 
r
 
<
-
 
(
a
 
>
>
 
b
)
"
]
,


}
;




c
o
n
s
t
 
P
S
E
U
D
O
_
P
2
 
=
 
[


 
 
"
#
 
i
s
P
o
w
e
r
O
f
2
(
n
)
"
,


 
 
"
r
e
t
u
r
n
 
n
 
>
 
0
 
a
n
d
 
(
n
 
&
 
(
n
 
-
 
1
)
)
 
=
 
0
"
,


 
 
"
#
 
A
 
p
o
w
e
r
 
o
f
 
2
 
h
a
s
 
e
x
a
c
t
l
y
 
o
n
e
 
1
-
b
i
t
,
"
,


 
 
"
#
 
n
 
-
 
1
 
f
l
i
p
s
 
t
h
a
t
 
b
i
t
 
a
n
d
 
a
l
l
 
l
o
w
e
r
 
b
i
t
s
,
"
,


 
 
"
#
 
s
o
 
A
N
D
 
b
e
c
o
m
e
s
 
0
.
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
P
O
P
 
=
 
[


 
 
"
#
 
B
r
i
a
n
 
K
e
r
n
i
g
h
a
n
'
s
 
p
o
p
c
o
u
n
t
"
,


 
 
"
c
o
u
n
t
 
<
-
 
0
"
,


 
 
"
w
h
i
l
e
 
n
 
!
=
 
0
:
"
,


 
 
"
 
 
n
 
<
-
 
n
 
&
 
(
n
 
-
 
1
)
 
 
 
#
 
c
l
e
a
r
s
 
l
o
w
e
s
t
 
1
-
b
i
t
"
,


 
 
"
 
 
c
o
u
n
t
 
<
-
 
c
o
u
n
t
 
+
 
1
"
,


 
 
"
r
e
t
u
r
n
 
c
o
u
n
t
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
X
O
R
 
=
 
[


 
 
"
#
 
F
i
n
d
 
t
h
e
 
s
i
n
g
l
e
 
e
l
e
m
e
n
t
 
(
o
t
h
e
r
s
 
a
p
p
e
a
r
 
t
w
i
c
e
)
"
,


 
 
"
r
e
s
u
l
t
 
<
-
 
0
"
,


 
 
"
f
o
r
 
x
 
i
n
 
a
r
r
:
"
,


 
 
"
 
 
r
e
s
u
l
t
 
<
-
 
r
e
s
u
l
t
 
X
O
R
 
x
"
,


 
 
"
r
e
t
u
r
n
 
r
e
s
u
l
t
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
S
U
B
S
 
=
 
[


 
 
"
#
 
G
e
n
e
r
a
t
e
 
a
l
l
 
s
u
b
s
e
t
s
 
o
f
 
n
 
i
t
e
m
s
"
,


 
 
"
f
o
r
 
m
a
s
k
 
f
r
o
m
 
0
 
t
o
 
2
^
n
 
-
 
1
:
"
,


 
 
"
 
 
s
u
b
s
e
t
 
<
-
 
{
i
 
|
 
b
i
t
 
i
 
o
f
 
m
a
s
k
 
=
 
1
}
"
,


]
;




f
u
n
c
t
i
o
n
 
f
r
a
m
e
s
O
p
(
o
p
:
 
O
p
,
 
a
:
 
n
u
m
b
e
r
,
 
b
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
a
B
i
t
s
 
=
 
t
o
B
i
t
s
(
a
)
,
 
b
B
i
t
s
 
=
 
t
o
B
i
t
s
(
b
)
;


 
 
l
e
t
 
r
e
s
u
l
t
 
=
 
0
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
o
p
,
 
a
,
 
b
,
 
r
e
s
u
l
t
:
 
0
,
 
"
a
.
b
i
n
"
:
 
a
B
i
t
s
.
j
o
i
n
(
"
"
)
,
 
"
b
.
b
i
n
"
:
 
b
B
i
t
s
.
j
o
i
n
(
"
"
)
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
m
p
u
t
e
 
$
{
a
}
 
$
{
o
p
}
 
$
{
b
}
.
`
,


 
 
 
 
a
,
 
b
,
 
r
e
s
u
l
t
,
 
d
e
m
o
:
 
"
o
p
"
,


 
 
}
)
;


 
 
i
f
 
(
o
p
 
=
=
=
 
"
N
O
T
"
 
|
|
 
o
p
 
=
=
=
 
"
S
H
L
"
 
|
|
 
o
p
 
=
=
=
 
"
S
H
R
"
)
 
{


 
 
 
 
c
o
n
s
t
 
r
 
=
 
a
p
p
l
y
O
p
(
o
p
,
 
a
,
 
b
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
o
p
,
 
a
,
 
b
,
 
r
e
s
u
l
t
:
 
r
,
 
"
r
.
b
i
n
"
:
 
t
o
B
i
t
s
(
r
)
.
j
o
i
n
(
"
"
)
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
$
{
o
p
}
 
$
{
a
}
$
{
o
p
 
=
=
=
 
"
N
O
T
"
 
?
 
"
"
 
:
 
`
 
b
y
 
$
{
b
}
`
}
 
=
 
$
{
r
}
.
`
,


 
 
 
 
 
 
a
,
 
b
,
 
r
e
s
u
l
t
:
 
r
,
 
d
e
m
o
:
 
"
o
p
"
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
r
e
s
u
l
t
"
,


 
 
 
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
}


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
B
I
T
S
 
-
 
1
;
 
i
 
>
=
 
0
;
 
i
-
-
)
 
{


 
 
 
 
c
o
n
s
t
 
i
d
x
 
=
 
B
I
T
S
 
-
 
1
 
-
 
i
;


 
 
 
 
c
o
n
s
t
 
a
i
 
=
 
a
B
i
t
s
[
i
d
x
]
,
 
b
i
 
=
 
b
B
i
t
s
[
i
d
x
]
;


 
 
 
 
l
e
t
 
r
i
 
=
 
0
;


 
 
 
 
i
f
 
(
o
p
 
=
=
=
 
"
A
N
D
"
)
 
r
i
 
=
 
a
i
 
&
 
b
i
;


 
 
 
 
e
l
s
e
 
i
f
 
(
o
p
 
=
=
=
 
"
O
R
"
)
 
r
i
 
=
 
a
i
 
|
 
b
i
;


 
 
 
 
e
l
s
e
 
i
f
 
(
o
p
 
=
=
=
 
"
X
O
R
"
)
 
r
i
 
=
 
a
i
 
^
 
b
i
;


 
 
 
 
i
f
 
(
r
i
)
 
r
e
s
u
l
t
 
|
=
 
(
1
 
<
<
 
i
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
[
`
a
[
$
{
i
}
]
`
]
:
 
a
i
,
 
[
`
b
[
$
{
i
}
]
`
]
:
 
b
i
,
 
[
`
r
[
$
{
i
}
]
`
]
:
 
r
i
,
 
r
e
s
u
l
t
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
B
i
t
 
$
{
i
}
:
 
$
{
a
i
}
 
$
{
o
p
}
 
$
{
b
i
}
 
=
 
$
{
r
i
}
.
`
,


 
 
 
 
 
 
a
,
 
b
,
 
r
e
s
u
l
t
,
 
a
c
t
i
v
e
B
i
t
:
 
i
,
 
d
e
m
o
:
 
"
o
p
"
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
r
e
s
u
l
t
"
,


 
 
 
 
}
)
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
o
p
,
 
a
,
 
b
,
 
r
e
s
u
l
t
,
 
"
r
.
b
i
n
"
:
 
t
o
B
i
t
s
(
r
e
s
u
l
t
)
.
j
o
i
n
(
"
"
)
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
F
i
n
a
l
:
 
$
{
a
}
 
$
{
o
p
}
 
$
{
b
}
 
=
 
$
{
r
e
s
u
l
t
}
.
`
,


 
 
 
 
a
,
 
b
,
 
r
e
s
u
l
t
,
 
d
e
m
o
:
 
"
o
p
"
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




f
u
n
c
t
i
o
n
 
f
r
a
m
e
s
P
o
w
2
(
a
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
a
m
1
 
=
 
(
a
 
-
 
1
)
 
&
 
M
A
X
;


 
 
c
o
n
s
t
 
r
 
=
 
a
 
>
 
0
 
&
&
 
(
a
 
&
 
a
m
1
)
 
=
=
=
 
0
 
?
 
1
 
:
 
0
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
n
:
 
a
,
 
"
n
-
1
"
:
 
a
m
1
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
T
e
s
t
:
 
i
s
 
$
{
a
}
 
a
 
p
o
w
e
r
 
o
f
 
2
?
 
C
o
m
p
u
t
e
 
n
 
&
 
(
n
-
1
)
.
`
,


 
 
 
 
a
,
 
b
:
 
a
m
1
,
 
r
e
s
u
l
t
:
 
0
,
 
d
e
m
o
:
 
"
p
o
w
e
r
2
"
,


 
 
}
)
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
B
I
T
S
 
-
 
1
;
 
i
 
>
=
 
0
;
 
i
-
-
)
 
{


 
 
 
 
c
o
n
s
t
 
i
d
x
 
=
 
B
I
T
S
 
-
 
1
 
-
 
i
;


 
 
 
 
c
o
n
s
t
 
a
i
 
=
 
t
o
B
i
t
s
(
a
)
[
i
d
x
]
,
 
b
i
 
=
 
t
o
B
i
t
s
(
a
m
1
)
[
i
d
x
]
;


 
 
 
 
c
o
n
s
t
 
r
i
 
=
 
a
i
 
&
 
b
i
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
i
,
 
[
`
n
[
$
{
i
}
]
`
]
:
 
a
i
,
 
[
`
(
n
-
1
)
[
$
{
i
}
]
`
]
:
 
b
i
,
 
[
`
r
[
$
{
i
}
]
`
]
:
 
r
i
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
B
i
t
 
$
{
i
}
:
 
$
{
a
i
}
 
A
N
D
 
$
{
b
i
}
 
=
 
$
{
r
i
}
.
`
,


 
 
 
 
 
 
a
,
 
b
:
 
a
m
1
,
 
r
e
s
u
l
t
:
 
0
,
 
a
c
t
i
v
e
B
i
t
:
 
i
,
 
d
e
m
o
:
 
"
p
o
w
e
r
2
"
,


 
 
 
 
}
)
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
n
:
 
a
,
 
"
n
&
(
n
-
1
)
"
:
 
a
 
&
 
a
m
1
,
 
i
s
P
o
w
e
r
O
f
2
:
 
r
 
?
 
"
t
r
u
e
"
 
:
 
"
f
a
l
s
e
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
r
 
?
 
`
$
{
a
}
 
h
a
s
 
o
n
e
 
1
-
b
i
t
,
 
p
o
w
e
r
 
o
f
 
2
.
`
 
:
 
`
$
{
a
}
 
h
a
s
 
m
u
l
t
i
p
l
e
 
1
-
b
i
t
s
,
 
N
O
T
 
a
 
p
o
w
e
r
 
o
f
 
2
.
`
,


 
 
 
 
a
,
 
b
:
 
a
m
1
,
 
r
e
s
u
l
t
:
 
r
,
 
d
e
m
o
:
 
"
p
o
w
e
r
2
"
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
i
s
P
o
w
e
r
O
f
2
"
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




f
u
n
c
t
i
o
n
 
f
r
a
m
e
s
P
o
p
c
o
u
n
t
(
a
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
l
e
t
 
n
 
=
 
a
 
&
 
M
A
X
;


 
 
l
e
t
 
c
o
u
n
t
 
=
 
0
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
n
,
 
c
o
u
n
t
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
C
o
u
n
t
 
s
e
t
 
b
i
t
s
 
i
n
 
$
{
a
}
 
u
s
i
n
g
 
B
r
i
a
n
 
K
e
r
n
i
g
h
a
n
'
s
 
t
r
i
c
k
.
`
,


 
 
 
 
a
:
 
n
,
 
b
:
 
0
,
 
r
e
s
u
l
t
:
 
0
,
 
d
e
m
o
:
 
"
p
o
p
c
o
u
n
t
"
,


 
 
}
)
;


 
 
w
h
i
l
e
 
(
n
 
!
=
=
 
0
)
 
{


 
 
 
 
c
o
n
s
t
 
a
f
t
e
r
 
=
 
n
 
&
 
(
n
 
-
 
1
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
n
,
 
"
n
-
1
"
:
 
(
n
 
-
 
1
)
 
&
 
M
A
X
,
 
"
n
&
(
n
-
1
)
"
:
 
a
f
t
e
r
,
 
c
o
u
n
t
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
n
=
$
{
n
}
.
 
n
 
&
 
(
n
-
1
)
 
=
 
$
{
a
f
t
e
r
}
 
-
 
c
l
e
a
r
s
 
t
h
e
 
l
o
w
e
s
t
 
1
-
b
i
t
.
`
,


 
 
 
 
 
 
a
:
 
n
,
 
b
:
 
a
f
t
e
r
,
 
r
e
s
u
l
t
:
 
a
f
t
e
r
,
 
d
e
m
o
:
 
"
p
o
p
c
o
u
n
t
"
,


 
 
 
 
}
)
;


 
 
 
 
n
 
=
 
a
f
t
e
r
;


 
 
 
 
c
o
u
n
t
+
+
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
n
,
 
c
o
u
n
t
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
U
p
d
a
t
e
 
n
=
$
{
n
}
,
 
c
o
u
n
t
=
$
{
c
o
u
n
t
}
.
`
,


 
 
 
 
 
 
a
:
 
n
,
 
b
:
 
0
,
 
r
e
s
u
l
t
:
 
n
,
 
d
e
m
o
:
 
"
p
o
p
c
o
u
n
t
"
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
c
o
u
n
t
"
,


 
 
 
 
}
)
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
c
o
u
n
t
,
 
r
e
s
u
l
t
:
 
c
o
u
n
t
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
T
o
t
a
l
 
s
e
t
 
b
i
t
s
:
 
$
{
c
o
u
n
t
}
.
`
,


 
 
 
 
a
:
 
0
,
 
b
:
 
0
,
 
r
e
s
u
l
t
:
 
c
o
u
n
t
,
 
d
e
m
o
:
 
"
p
o
p
c
o
u
n
t
"
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




f
u
n
c
t
i
o
n
 
f
r
a
m
e
s
X
o
r
A
r
r
a
y
(
a
r
r
:
 
n
u
m
b
e
r
[
]
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
l
e
t
 
a
c
c
 
=
 
0
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
a
r
r
:
 
a
r
r
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
,
 
r
e
s
u
l
t
:
 
0
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
S
t
a
r
t
 
w
i
t
h
 
r
e
s
u
l
t
 
=
 
0
.
 
X
O
R
 
e
v
e
r
y
 
e
l
e
m
e
n
t
.
`
,


 
 
 
 
a
:
 
0
,
 
b
:
 
0
,
 
r
e
s
u
l
t
:
 
0
,
 
d
e
m
o
:
 
"
x
o
r
-
a
r
r
a
y
"
,
 
a
r
r
,
 
a
r
r
I
d
x
:
 
-
1
,
 
a
c
c
u
m
u
l
a
t
o
r
:
 
0
,


 
 
}
)
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
a
r
r
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
n
e
w
A
c
c
 
=
 
(
a
c
c
 
^
 
a
r
r
[
i
]
)
 
&
 
M
A
X
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
i
,
 
"
a
r
r
[
i
]
"
:
 
a
r
r
[
i
]
,
 
r
e
s
u
l
t
:
 
a
c
c
,
 
"
n
e
w
 
r
e
s
u
l
t
"
:
 
n
e
w
A
c
c
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
r
e
s
u
l
t
 
=
 
$
{
a
c
c
}
 
X
O
R
 
$
{
a
r
r
[
i
]
}
 
=
 
$
{
n
e
w
A
c
c
}
.
 
$
{
n
e
w
A
c
c
 
=
=
=
 
0
 
?
 
"
(
p
a
i
r
 
c
a
n
c
e
l
l
e
d
)
"
 
:
 
"
"
}
`
,


 
 
 
 
 
 
a
:
 
a
c
c
,
 
b
:
 
a
r
r
[
i
]
,
 
r
e
s
u
l
t
:
 
n
e
w
A
c
c
,
 
d
e
m
o
:
 
"
x
o
r
-
a
r
r
a
y
"
,


 
 
 
 
 
 
a
r
r
,
 
a
r
r
I
d
x
:
 
i
,
 
a
c
c
u
m
u
l
a
t
o
r
:
 
n
e
w
A
c
c
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
a
c
c
u
m
u
l
a
t
o
r
"
,


 
 
 
 
}
)
;


 
 
 
 
a
c
c
 
=
 
n
e
w
A
c
c
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
a
c
c
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
U
n
i
q
u
e
 
e
l
e
m
e
n
t
 
(
o
t
h
e
r
s
 
c
a
n
c
e
l
l
e
d
 
i
n
 
p
a
i
r
s
)
:
 
$
{
a
c
c
}
.
`
,


 
 
 
 
a
:
 
0
,
 
b
:
 
0
,
 
r
e
s
u
l
t
:
 
a
c
c
,
 
d
e
m
o
:
 
"
x
o
r
-
a
r
r
a
y
"
,


 
 
 
 
a
r
r
,
 
a
r
r
I
d
x
:
 
a
r
r
.
l
e
n
g
t
h
,
 
a
c
c
u
m
u
l
a
t
o
r
:
 
a
c
c
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




f
u
n
c
t
i
o
n
 
f
r
a
m
e
s
S
u
b
s
e
t
s
(
n
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
t
o
t
a
l
 
=
 
1
 
<
<
 
n
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
n
,
 
"
2
^
n
"
:
 
t
o
t
a
l
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
E
n
u
m
e
r
a
t
e
 
$
{
t
o
t
a
l
}
 
s
u
b
s
e
t
s
 
v
i
a
 
m
a
s
k
s
 
0
.
.
$
{
t
o
t
a
l
 
-
 
1
}
.
`
,


 
 
 
 
a
:
 
0
,
 
b
:
 
0
,
 
r
e
s
u
l
t
:
 
0
,
 
d
e
m
o
:
 
"
s
u
b
s
e
t
s
"
,
 
s
u
b
s
e
t
I
n
d
e
x
:
 
-
1
,


 
 
}
)
;


 
 
f
o
r
 
(
l
e
t
 
m
a
s
k
 
=
 
0
;
 
m
a
s
k
 
<
 
t
o
t
a
l
;
 
m
a
s
k
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
m
e
m
b
e
r
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
 
=
 
[
]
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
i
f
 
(
m
a
s
k
 
&
 
(
1
 
<
<
 
i
)
)
 
m
e
m
b
e
r
s
.
p
u
s
h
(
S
t
r
i
n
g
(
i
)
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
m
a
s
k
,
 
b
i
n
:
 
m
a
s
k
.
t
o
S
t
r
i
n
g
(
2
)
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
,
 
s
u
b
s
e
t
:
 
`
{
$
{
m
e
m
b
e
r
s
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
}
}
`
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
m
a
s
k
=
$
{
m
a
s
k
}
 
(
$
{
m
a
s
k
.
t
o
S
t
r
i
n
g
(
2
)
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
}
)
 
-
>
 
s
u
b
s
e
t
 
{
$
{
m
e
m
b
e
r
s
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
}
}
.
`
,


 
 
 
 
 
 
a
:
 
m
a
s
k
,
 
b
:
 
0
,
 
r
e
s
u
l
t
:
 
m
a
s
k
,
 
d
e
m
o
:
 
"
s
u
b
s
e
t
s
"
,
 
s
u
b
s
e
t
I
n
d
e
x
:
 
m
a
s
k
,


 
 
 
 
}
)
;


 
 
}


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
i
t
 
r
o
w
 
r
e
n
d
e
r
e
r
 
(
l
o
c
a
l
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
B
i
t
R
o
w
(
{


 
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
h
i
g
h
l
i
g
h
t
B
i
t
,
 
c
o
l
o
r
,


}
:
 
{


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;


 
 
h
i
g
h
l
i
g
h
t
B
i
t
?
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
l
o
r
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
)
 
{


 
 
c
o
n
s
t
 
b
i
t
s
 
=
 
t
o
B
i
t
s
(
v
a
l
u
e
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
.
5
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
w
-
2
4
 
t
e
x
t
-
r
i
g
h
t
 
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
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
f
o
n
t
-
s
a
n
s
 
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


 
 
 
 
 
 
 
 
{
l
a
b
e
l
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
i
n
-
w
-
1
2
 
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
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
e
x
t
r
a
b
o
l
d
 
t
e
x
t
-
b
a
s
e
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
{
v
a
l
u
e
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
 
g
a
p
-
0
.
5
"
>


 
 
 
 
 
 
 
 
{
b
i
t
s
.
m
a
p
(
(
b
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
i
t
P
o
s
 
=
 
B
I
T
S
 
-
 
1
 
-
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
h
i
g
h
l
i
g
h
t
B
i
t
 
=
=
=
 
b
i
t
P
o
s
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=
 
b
 
?
 
(
c
o
l
o
r
 
?
?
 
T
H
E
M
E
.
a
c
c
e
n
t
)
 
:
 
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
b
i
t
 
$
{
b
i
t
P
o
s
}
`
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
w
-
7
 
h
-
7
 
r
o
u
n
d
e
d
 
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
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
e
x
t
r
a
b
o
l
d
 
t
e
x
t
-
s
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
a
l
l
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
A
c
t
i
v
e
 
?
 
"
r
i
n
g
-
2
 
r
i
n
g
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
1
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
i
s
A
c
t
i
v
e
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
f
5
9
e
0
b
"
 
:
 
b
 
?
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
`
 
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
b
 
?
 
"
#
f
f
f
"
 
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
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
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
f
o
n
t
-
m
o
n
o
 
m
l
-
1
"
>


 
 
 
 
 
 
 
 
{
t
o
B
i
t
s
(
v
a
l
u
e
)
.
j
o
i
n
(
"
"
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


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
S
u
b
-
v
i
s
u
a
l
i
z
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
p
a
r
s
e
T
w
o
(
s
:
 
s
t
r
i
n
g
)
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
n
u
m
s
 
=
 
s
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
N
u
m
b
e
r
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
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
x
)
)
;


 
 
i
f
 
(
n
u
m
s
.
l
e
n
g
t
h
 
<
 
1
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
[
M
a
t
h
.
m
a
x
(
0
,
 
M
a
t
h
.
m
i
n
(
M
A
X
,
 
n
u
m
s
[
0
]
 
|
 
0
)
)
,
 
M
a
t
h
.
m
a
x
(
0
,
 
M
a
t
h
.
m
i
n
(
7
,
 
(
n
u
m
s
[
1
]
 
?
?
 
0
)
 
|
 
0
)
)
]
;


}




f
u
n
c
t
i
o
n
 
O
p
V
i
s
u
a
l
i
z
e
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
r
c
,
 
s
e
t
S
r
c
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
1
7
0
,
 
8
5
"
)
;


 
 
c
o
n
s
t
 
[
o
p
,
 
s
e
t
O
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
O
p
>
(
"
A
N
D
"
)
;


 
 
c
o
n
s
t
 
[
a
,
 
b
]
 
=
 
p
a
r
s
e
T
w
o
(
s
r
c
)
 
?
?
 
[
1
7
0
,
 
8
5
]
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
f
r
a
m
e
s
O
p
(
o
p
,
 
a
,
 
b
)
,
 
[
o
p
,
 
a
,
 
b
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
B
i
t
w
i
s
e
 
$
{
o
p
}
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
c
o
l
 
g
a
p
-
2
.
5
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
T
w
o
 
n
u
m
b
e
r
s
 
(
0
-
2
5
5
)
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
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
1
7
0
,
 
8
5
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
1
0
1
0
1
0
1
0
 
&
 
0
1
0
1
0
1
0
1
"
,
 
v
a
l
u
e
:
 
"
1
7
0
,
 
8
5
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
P
o
w
e
r
 
o
f
 
2
"
,
 
v
a
l
u
e
:
 
"
1
6
,
 
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
o
m
p
l
e
m
e
n
t
"
,
 
v
a
l
u
e
:
 
"
1
2
,
 
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
h
i
f
t
"
,
 
v
a
l
u
e
:
 
"
5
,
 
3
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
T
w
o
(
v
)
)
 
s
e
t
S
r
c
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
/
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
A
N
D
"
,
 
"
O
R
"
,
 
"
X
O
R
"
,
 
"
N
O
T
"
,
 
"
S
H
L
"
,
 
"
S
H
R
"
]
 
a
s
 
O
p
[
]
)
.
m
a
p
(
(
o
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
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
o
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
 
s
e
t
O
p
(
o
)
}
 
a
c
t
i
v
e
=
{
o
p
 
=
=
=
 
o
}
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
x
s
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
"
>
{
o
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
P
i
l
l
B
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
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
O
P
[
o
p
]
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
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
c
o
l
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
a
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
a
 
?
?
 
0
}
 
h
i
g
h
l
i
g
h
t
B
i
t
=
{
f
r
a
m
e
?
.
a
c
t
i
v
e
B
i
t
}
 
/
>


 
 
 
 
 
 
 
 
{
o
p
 
!
=
=
 
"
N
O
T
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
B
i
t
R
o
w


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
{
o
p
 
=
=
=
 
"
S
H
L
"
 
|
|
 
o
p
 
=
=
=
 
"
S
H
R
"
 
?
 
`
s
h
i
f
t
 
b
y
 
$
{
f
r
a
m
e
?
.
b
 
?
?
 
0
}
`
 
:
 
"
b
"
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
 
=
=
=
 
"
S
H
L
"
 
|
|
 
o
p
 
=
=
=
 
"
S
H
R
"
 
?
 
0
 
:
 
(
f
r
a
m
e
?
.
b
 
?
?
 
0
)
}


 
 
 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
B
i
t
=
{
f
r
a
m
e
?
.
a
c
t
i
v
e
B
i
t
}


 
 
 
 
 
 
 
 
 
 
/
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
h
-
p
x
 
b
g
-
s
t
o
n
e
-
2
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
w
h
i
t
e
/
1
0
 
m
y
-
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
r
e
s
u
l
t
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
r
e
s
u
l
t
 
?
?
 
0
}
 
h
i
g
h
l
i
g
h
t
B
i
t
=
{
f
r
a
m
e
?
.
a
c
t
i
v
e
B
i
t
}
 
c
o
l
o
r
=
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
 
/
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
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
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
P
o
w
e
r
2
V
i
s
u
a
l
i
z
e
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
r
c
,
 
s
e
t
S
r
c
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
1
6
"
)
;


 
 
c
o
n
s
t
 
a
 
=
 
N
u
m
b
e
r
(
s
r
c
)
 
|
|
 
1
6
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
f
r
a
m
e
s
P
o
w
2
(
a
 
&
 
M
A
X
)
,
 
[
a
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
i
s
P
o
w
e
r
O
f
2
(
n
)
 
v
i
a
 
n
 
&
 
(
n
-
1
)
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
N
u
m
b
e
r
 
n
 
(
0
-
2
5
5
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[
{
 
l
a
b
e
l
:
 
"
1
6
"
,
 
v
a
l
u
e
:
 
"
1
6
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
1
8
"
,
 
v
a
l
u
e
:
 
"
1
8
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
1
"
,
 
v
a
l
u
e
:
 
"
1
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
0
"
,
 
v
a
l
u
e
:
 
"
0
"
 
}
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
!
N
u
m
b
e
r
.
i
s
N
a
N
(
N
u
m
b
e
r
(
v
)
)
)
 
s
e
t
S
r
c
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
P
2
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
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
c
o
l
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
n
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
a
 
?
?
 
0
}
 
h
i
g
h
l
i
g
h
t
B
i
t
=
{
f
r
a
m
e
?
.
a
c
t
i
v
e
B
i
t
}
 
/
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
n
-
1
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
b
 
?
?
 
0
}
 
h
i
g
h
l
i
g
h
t
B
i
t
=
{
f
r
a
m
e
?
.
a
c
t
i
v
e
B
i
t
}
 
/
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
h
-
p
x
 
b
g
-
s
t
o
n
e
-
2
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
w
h
i
t
e
/
1
0
 
m
y
-
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
n
 
&
 
(
n
-
1
)
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
r
e
s
u
l
t
 
?
?
 
0
}
 
h
i
g
h
l
i
g
h
t
B
i
t
=
{
f
r
a
m
e
?
.
a
c
t
i
v
e
B
i
t
}
 
c
o
l
o
r
=
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
 
/
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
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
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
P
o
p
c
o
u
n
t
V
i
s
u
a
l
i
z
e
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
r
c
,
 
s
e
t
S
r
c
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
1
1
"
)
;


 
 
c
o
n
s
t
 
a
 
=
 
(
N
u
m
b
e
r
(
s
r
c
)
 
|
|
 
1
1
)
 
&
 
M
A
X
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
f
r
a
m
e
s
P
o
p
c
o
u
n
t
(
a
)
,
 
[
a
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
B
r
i
a
n
 
K
e
r
n
i
g
h
a
n
 
P
o
p
c
o
u
n
t
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
N
u
m
b
e
r
 
n
 
(
0
-
2
5
5
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[
{
 
l
a
b
e
l
:
 
"
1
1
 
(
1
0
1
1
)
"
,
 
v
a
l
u
e
:
 
"
1
1
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
2
5
5
"
,
 
v
a
l
u
e
:
 
"
2
5
5
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
1
7
0
"
,
 
v
a
l
u
e
:
 
"
1
7
0
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
0
"
,
 
v
a
l
u
e
:
 
"
0
"
 
}
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
!
N
u
m
b
e
r
.
i
s
N
a
N
(
N
u
m
b
e
r
(
v
)
)
)
 
s
e
t
S
r
c
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
P
O
P
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
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
c
o
l
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
n
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
a
 
?
?
 
0
}
 
/
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
n
 
&
 
(
n
-
1
)
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
b
 
?
?
 
0
}
 
c
o
l
o
r
=
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
 
/
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
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
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
X
o
r
A
r
r
a
y
V
i
s
u
a
l
i
z
e
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
r
c
,
 
s
e
t
S
r
c
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
2
,
 
3
,
 
5
,
 
2
,
 
3
"
)
;


 
 
c
o
n
s
t
 
a
r
r
 
=
 
s
r
c
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
N
u
m
b
e
r
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
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
x
)
 
&
&
 
x
 
>
=
 
0
 
&
&
 
x
 
<
=
 
M
A
X
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


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
f
r
a
m
e
s
X
o
r
A
r
r
a
y
(
a
r
r
.
l
e
n
g
t
h
 
>
 
0
 
?
 
a
r
r
 
:
 
[
2
,
 
3
,
 
5
,
 
2
,
 
3
]
)
,
 
[
s
r
c
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
X
O
R
 
-
 
S
i
n
g
l
e
 
E
l
e
m
e
n
t
 
(
o
t
h
e
r
s
 
i
n
 
p
a
i
r
s
)
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
A
r
r
a
y
 
(
e
v
e
r
y
 
n
u
m
b
e
r
 
a
p
p
e
a
r
s
 
t
w
i
c
e
 
e
x
c
e
p
t
 
o
n
e
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
5
 
i
s
 
u
n
i
q
u
e
"
,
 
v
a
l
u
e
:
 
"
2
,
 
3
,
 
5
,
 
2
,
 
3
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
7
 
i
s
 
u
n
i
q
u
e
"
,
 
v
a
l
u
e
:
 
"
1
,
 
1
,
 
4
,
 
4
,
 
7
,
 
9
,
 
9
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
i
n
g
l
e
"
,
 
v
a
l
u
e
:
 
"
4
2
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
s
e
t
S
r
c
(
v
)
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
X
O
R
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
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
c
o
l
 
g
a
p
-
2
.
5
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
 
g
a
p
-
1
.
5
 
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
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
a
r
r
 
?
?
 
[
]
)
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
i
 
=
=
=
 
f
r
a
m
e
?
.
a
r
r
I
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
D
o
n
e
 
=
 
i
 
<
 
(
f
r
a
m
e
?
.
a
r
r
I
d
x
 
?
?
 
-
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
.
5
 
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
m
d
 
f
o
n
t
-
m
o
n
o
 
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
s
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
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
i
s
A
c
t
i
v
e
 
?
 
"
1
.
5
p
x
 
s
o
l
i
d
 
#
f
5
9
e
0
b
"
 
:
 
i
s
D
o
n
e
 
?
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
`
 
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
A
c
t
i
v
e
 
?
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
1
)
"
 
:
 
i
s
D
o
n
e
 
?
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
1
4
`
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
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
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
a
c
c
u
m
u
l
a
t
o
r
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
a
c
c
u
m
u
l
a
t
o
r
 
?
?
 
0
}
 
c
o
l
o
r
=
{
T
H
E
M
E
.
a
c
c
e
n
t
}
 
/
>


 
 
 
 
 
 
 
 
<
B
i
t
R
o
w
 
l
a
b
e
l
=
"
r
e
s
u
l
t
 
(
f
i
n
a
l
)
"
 
v
a
l
u
e
=
{
f
r
a
m
e
?
.
r
e
s
u
l
t
 
?
?
 
0
}
 
c
o
l
o
r
=
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
 
/
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
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
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
S
u
b
s
e
t
s
V
i
s
u
a
l
i
z
e
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
r
c
,
 
s
e
t
S
r
c
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
3
"
)
;


 
 
c
o
n
s
t
 
n
 
=
 
M
a
t
h
.
m
a
x
(
1
,
 
M
a
t
h
.
m
i
n
(
4
,
 
N
u
m
b
e
r
(
s
r
c
)
 
|
|
 
3
)
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
f
r
a
m
e
s
S
u
b
s
e
t
s
(
n
)
,
 
[
n
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
t
o
t
a
l
 
=
 
1
 
<
<
 
n
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
A
l
l
 
S
u
b
s
e
t
s
 
v
i
a
 
B
i
t
m
a
s
k
 
E
n
u
m
e
r
a
t
i
o
n
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
n
 
-
 
n
u
m
b
e
r
 
o
f
 
i
t
e
m
s
 
(
1
-
4
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[
{
 
l
a
b
e
l
:
 
"
2
"
,
 
v
a
l
u
e
:
 
"
2
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
3
"
,
 
v
a
l
u
e
:
 
"
3
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
4
"
,
 
v
a
l
u
e
:
 
"
4
"
 
}
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
c
o
n
s
t
 
k
 
=
 
N
u
m
b
e
r
(
v
)
;
 
i
f
 
(
k
 
>
=
 
1
 
&
&
 
k
 
<
=
 
4
)
 
s
e
t
S
r
c
(
S
t
r
i
n
g
(
k
)
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
S
U
B
S
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
}


 
 
 
 
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
c
o
l
 
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
.
5
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
 
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
 
m
a
x
-
w
-
2
x
l
"
>


 
 
 
 
 
 
 
 
 
 
{
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
{
 
l
e
n
g
t
h
:
 
t
o
t
a
l
 
}
,
 
(
_
,
 
m
a
s
k
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
m
a
s
k
 
=
=
=
 
f
r
a
m
e
?
.
s
u
b
s
e
t
I
n
d
e
x
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
D
o
n
e
 
=
 
(
f
r
a
m
e
?
.
s
u
b
s
e
t
I
n
d
e
x
 
?
?
 
-
1
)
 
>
 
m
a
s
k
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
i
n
 
=
 
m
a
s
k
.
t
o
S
t
r
i
n
g
(
2
)
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
e
m
b
e
r
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
 
=
 
[
]
;


 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
i
f
 
(
m
a
s
k
 
&
 
(
1
 
<
<
 
i
)
)
 
m
e
m
b
e
r
s
.
p
u
s
h
(
S
t
r
i
n
g
(
i
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
m
a
s
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
p
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
m
d
 
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
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
x
s
 
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
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
i
s
A
c
t
i
v
e
 
?
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
`
 
:
 
i
s
D
o
n
e
 
?
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
`
 
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
A
c
t
i
v
e
 
?
 
`
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
1
0
`
 
:
 
i
s
D
o
n
e
 
?
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
1
4
`
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
W
i
d
t
h
:
 
7
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
i
s
A
c
t
i
v
e
 
?
 
`
0
 
0
 
0
 
2
p
x
 
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
4
0
`
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
n
t
-
e
x
t
r
a
b
o
l
d
"
>
{
b
i
n
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
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
{
`
{
$
{
m
e
m
b
e
r
s
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
 
|
|
 
"
∅
"
}
}
`
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


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
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
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
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
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
(
s
w
i
t
c
h
e
r
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
D
e
m
o
K
e
y
 
=
 
"
o
p
"
 
|
 
"
p
o
w
e
r
2
"
 
|
 
"
p
o
p
c
o
u
n
t
"
 
|
 
"
x
o
r
-
a
r
r
a
y
"
 
|
 
"
s
u
b
s
e
t
s
"
;




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
d
e
m
o
,
 
s
e
t
D
e
m
o
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
D
e
m
o
K
e
y
>
(
"
o
p
"
)
;


 
 
c
o
n
s
t
 
D
E
M
O
S
:
 
{
 
k
:
 
D
e
m
o
K
e
y
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[


 
 
 
 
{
 
k
:
 
"
o
p
"
,
 
l
a
b
e
l
:
 
"
B
a
s
i
c
 
O
p
e
r
a
t
o
r
s
"
 
}
,


 
 
 
 
{
 
k
:
 
"
p
o
w
e
r
2
"
,
 
l
a
b
e
l
:
 
"
i
s
P
o
w
e
r
O
f
2
"
 
}
,


 
 
 
 
{
 
k
:
 
"
p
o
p
c
o
u
n
t
"
,
 
l
a
b
e
l
:
 
"
P
o
p
c
o
u
n
t
 
(
K
e
r
n
i
g
h
a
n
)
"
 
}
,


 
 
 
 
{
 
k
:
 
"
x
o
r
-
a
r
r
a
y
"
,
 
l
a
b
e
l
:
 
"
X
O
R
 
U
n
i
q
u
e
 
E
l
e
m
e
n
t
"
 
}
,


 
 
 
 
{
 
k
:
 
"
s
u
b
s
e
t
s
"
,
 
l
a
b
e
l
:
 
"
S
u
b
s
e
t
 
E
n
u
m
e
r
a
t
i
o
n
"
 
}
,


 
 
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
c
o
l
 
g
a
p
-
3
.
5
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
{
D
E
M
O
S
.
m
a
p
(
(
d
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
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
d
.
k
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
 
s
e
t
D
e
m
o
(
d
.
k
)
}
 
a
c
t
i
v
e
=
{
d
e
m
o
 
=
=
=
 
d
.
k
}
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
x
s
"
>
{
d
.
l
a
b
e
l
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
P
i
l
l
B
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


 
 
 
 
 
 
{
d
e
m
o
 
=
=
=
 
"
o
p
"
 
&
&
 
<
O
p
V
i
s
u
a
l
i
z
e
r
 
/
>
}


 
 
 
 
 
 
{
d
e
m
o
 
=
=
=
 
"
p
o
w
e
r
2
"
 
&
&
 
<
P
o
w
e
r
2
V
i
s
u
a
l
i
z
e
r
 
/
>
}


 
 
 
 
 
 
{
d
e
m
o
 
=
=
=
 
"
p
o
p
c
o
u
n
t
"
 
&
&
 
<
P
o
p
c
o
u
n
t
V
i
s
u
a
l
i
z
e
r
 
/
>
}


 
 
 
 
 
 
{
d
e
m
o
 
=
=
=
 
"
x
o
r
-
a
r
r
a
y
"
 
&
&
 
<
X
o
r
A
r
r
a
y
V
i
s
u
a
l
i
z
e
r
 
/
>
}


 
 
 
 
 
 
{
d
e
m
o
 
=
=
=
 
"
s
u
b
s
e
t
s
"
 
&
&
 
<
S
u
b
s
e
t
s
V
i
s
u
a
l
i
z
e
r
 
/
>
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
y
 
b
i
t
s
?
"
,
 
b
o
d
y
:
 
"
M
o
d
e
r
n
 
C
P
U
s
 
e
x
e
c
u
t
e
 
b
i
t
w
i
s
e
 
o
p
s
 
i
n
 
o
n
e
 
c
y
c
l
e
.
 
P
r
o
b
l
e
m
s
 
t
h
a
t
 
f
e
e
l
 
c
o
m
p
l
e
x
 
(
s
u
b
s
e
t
s
,
 
s
t
a
t
e
,
 
t
o
g
g
l
e
s
,
 
m
a
s
k
s
,
 
p
e
r
m
i
s
s
i
o
n
s
)
 
c
o
l
l
a
p
s
e
 
t
o
 
a
r
i
t
h
m
e
t
i
c
 
o
n
 
i
n
t
e
g
e
r
s
 
w
h
e
n
 
y
o
u
 
t
h
i
n
k
 
i
n
 
b
i
t
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
e
 
s
i
x
 
o
p
e
r
a
t
o
r
s
"
,
 
b
o
d
y
:
 
"
A
N
D
 
(
&
)
 
-
 
m
a
s
k
 
/
 
c
h
e
c
k
 
b
i
t
.
 
O
R
 
(
|
)
 
-
 
s
e
t
 
b
i
t
.
 
X
O
R
 
(
^
)
 
-
 
t
o
g
g
l
e
 
/
 
f
i
n
d
 
d
i
f
f
e
r
e
n
c
e
.
 
N
O
T
 
(
~
)
 
-
 
f
l
i
p
 
a
l
l
 
b
i
t
s
.
 
<
<
 
a
n
d
 
>
>
 
-
 
s
h
i
f
t
 
(
m
u
l
t
i
p
l
y
 
/
 
d
i
v
i
d
e
 
b
y
 
2
^
k
 
i
n
 
i
n
t
e
g
e
r
 
w
o
r
l
d
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
X
O
R
'
s
 
m
a
g
i
c
"
,
 
b
o
d
y
:
 
"
x
 
X
O
R
 
x
 
=
 
0
 
a
n
d
 
x
 
X
O
R
 
0
 
=
 
x
.
 
S
o
 
i
f
 
e
v
e
r
y
 
e
l
e
m
e
n
t
 
a
p
p
e
a
r
s
 
t
w
i
c
e
 
e
x
c
e
p
t
 
o
n
e
,
 
X
O
R
-
i
n
g
 
t
h
e
 
w
h
o
l
e
 
a
r
r
a
y
 
c
a
n
c
e
l
s
 
t
h
e
 
p
a
i
r
s
 
a
n
d
 
l
e
a
v
e
s
 
t
h
e
 
u
n
i
q
u
e
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
n
 
&
 
(
n
-
1
)
"
,
 
b
o
d
y
:
 
"
A
 
p
o
w
e
r
 
o
f
 
2
 
h
a
s
 
e
x
a
c
t
l
y
 
o
n
e
 
1
-
b
i
t
.
 
S
u
b
t
r
a
c
t
i
n
g
 
1
 
f
l
i
p
s
 
t
h
a
t
 
b
i
t
 
a
n
d
 
s
e
t
s
 
e
v
e
r
y
t
h
i
n
g
 
b
e
l
o
w
.
 
A
N
D
-
i
n
g
 
g
i
v
e
s
 
0
.
 
S
a
m
e
 
t
r
i
c
k
 
c
l
e
a
r
s
 
t
h
e
 
l
o
w
e
s
t
 
s
e
t
 
b
i
t
,
 
g
i
v
i
n
g
 
O
(
p
o
p
c
o
u
n
t
)
 
f
o
r
 
c
o
u
n
t
i
n
g
 
1
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
M
a
s
k
s
 
a
s
 
s
e
t
s
"
,
 
b
o
d
y
:
 
"
A
 
b
i
t
m
a
s
k
 
o
f
 
n
 
b
i
t
s
 
r
e
p
r
e
s
e
n
t
s
 
a
 
s
u
b
s
e
t
 
o
f
 
{
0
.
.
n
-
1
}
.
 
E
n
u
m
e
r
a
t
e
 
a
l
l
 
s
u
b
s
e
t
s
 
b
y
 
c
o
u
n
t
i
n
g
 
f
r
o
m
 
0
 
t
o
 
2
^
n
 
-
 
1
.
 
E
s
s
e
n
t
i
a
l
 
f
o
r
 
b
i
t
m
a
s
k
 
D
P
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
I
n
t
e
r
v
i
e
w
 
f
a
v
o
r
i
t
e
s
"
,
 
b
o
d
y
:
 
"
C
o
m
p
l
e
m
e
n
t
 
a
r
i
t
h
m
e
t
i
c
,
 
s
h
i
f
t
-
a
s
-
m
u
l
t
i
p
l
i
c
a
t
i
o
n
,
 
t
w
o
'
s
-
c
o
m
p
l
e
m
e
n
t
 
r
e
p
r
e
s
e
n
t
a
t
i
o
n
,
 
a
n
d
 
X
O
R
 
t
r
i
c
k
s
 
s
h
o
w
 
u
p
 
i
n
 
a
l
m
o
s
t
 
e
v
e
r
y
 
p
l
a
c
e
m
e
n
t
 
t
e
s
t
.
"
 
}
,


 
 
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
c
o
l
 
g
a
p
-
3
.
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
C
o
l
u
m
n
-
w
i
s
e
 
l
o
g
i
c
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
E
v
e
r
y
 
i
n
t
e
g
e
r
 
i
s
 
a
 
r
o
w
 
o
f
 
b
i
t
s
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
i
n
t
e
g
e
r
 
i
s
 
a
 
r
o
w
 
o
f
 
b
i
t
s
.
 
E
v
e
r
y
 
b
i
t
w
i
s
e
 
o
p
e
r
a
t
o
r
 
i
s
 
c
o
l
u
m
n
-
w
i
s
e
 
l
o
g
i
c
 
b
e
t
w
e
e
n
 
t
w
o
 
r
o
w
s
.


 
 
 
 
 
 
 
 
 
 
T
h
i
n
k
i
n
g
 
i
n
 
b
i
n
a
r
y
 
t
u
r
n
s
 
i
n
t
e
g
e
r
 
p
r
o
b
l
e
m
s
 
i
n
t
o
 
c
o
m
b
i
n
a
t
o
r
i
c
s
 
o
n
 
b
i
t
s
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
2
.
5
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
6
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
m
o
n
o
 
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
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
m
b
-
1
.
5
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>
{
s
.
t
i
t
l
e
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
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
C
o
m
p
u
t
e
 
1
2
 
&
 
1
0
 
i
n
 
d
e
c
i
m
a
l
.
"
,
 
a
n
s
w
e
r
:
 
"
8
"
 
}
,


 
 
 
 
{
 
q
:
 
"
H
o
w
 
m
a
n
y
 
1
-
b
i
t
s
 
i
n
 
1
7
0
 
(
b
i
n
a
r
y
 
1
0
1
0
1
0
1
0
)
?
"
,
 
a
n
s
w
e
r
:
 
"
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
X
O
R
 
o
f
 
[
4
,
 
1
,
 
2
,
 
1
,
 
2
]
 
=
 
?
"
,
 
a
n
s
w
e
r
:
 
"
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
5
 
<
<
 
2
 
=
 
?
"
,
 
a
n
s
w
e
r
:
 
"
2
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
s
 
6
4
 
a
 
p
o
w
e
r
 
o
f
 
2
?
 
(
y
e
s
/
n
o
)
"
,
 
a
n
s
w
e
r
:
 
"
y
e
s
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
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
s
t
r
i
n
g
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
"
"
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
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
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
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
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
T
r
y
 
e
a
c
h
 
i
n
 
y
o
u
r
 
h
e
a
d
,
 
t
h
e
n
 
r
e
v
e
a
l
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
u
e
s
s
e
s
[
i
]
.
t
r
i
m
(
)
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
 
=
=
=
 
p
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
m
b
-
2
.
5
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
p
.
q
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
 
g
a
p
-
2
 
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
 
f
l
e
x
-
w
r
a
p
"
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
g
u
e
s
s
e
s
[
i
]
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
 
{
 
c
o
n
s
t
 
g
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;
 
g
[
i
]
 
=
 
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
;
 
s
e
t
G
u
e
s
s
e
s
(
g
)
;
 
}
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
y
o
u
r
 
a
n
s
w
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
p
x
-
2
.
5
 
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
m
d
 
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
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
m
 
w
-
2
8
 
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
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
 
=
 
[
.
.
.
s
h
o
w
n
]
;
 
s
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
(
s
)
;
 
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
m
d
 
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
b
o
l
d
 
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
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
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
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
n
[
i
]
 
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
b
o
l
d
 
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
m
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
c
o
r
r
e
c
t
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
D
a
r
k
 
:
 
T
H
E
M
E
.
d
a
n
g
e
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
c
o
r
r
e
c
t
 
?
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
1
4
`
 
:
 
`
$
{
T
H
E
M
E
.
d
a
n
g
e
r
}
1
4
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
:
 
$
{
p
.
a
n
s
w
e
r
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
n
s
w
e
r
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
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
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
E
s
s
e
n
t
i
a
l
 
b
i
t
 
t
r
i
c
k
s
 
c
h
e
a
t
s
h
e
e
t
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
l
o
o
s
e
 
p
l
-
5
 
l
i
s
t
-
d
i
s
c
 
s
p
a
c
e
-
y
-
0
.
5
 
f
o
n
t
-
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
h
e
c
k
 
i
f
 
b
i
t
 
i
 
i
s
 
s
e
t
:
 
<
I
n
l
i
n
e
C
o
d
e
>
(
n
 
&
g
t
;
&
g
t
;
 
i
)
 
&
a
m
p
;
 
1
<
/
I
n
l
i
n
e
C
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
e
t
 
b
i
t
 
i
:
 
<
I
n
l
i
n
e
C
o
d
e
>
n
 
|
 
(
1
 
&
l
t
;
&
l
t
;
 
i
)
<
/
I
n
l
i
n
e
C
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
l
e
a
r
 
b
i
t
 
i
:
 
<
I
n
l
i
n
e
C
o
d
e
>
n
 
&
a
m
p
;
 
~
(
1
 
&
l
t
;
&
l
t
;
 
i
)
<
/
I
n
l
i
n
e
C
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
T
o
g
g
l
e
 
b
i
t
 
i
:
 
<
I
n
l
i
n
e
C
o
d
e
>
n
 
^
 
(
1
 
&
l
t
;
&
l
t
;
 
i
)
<
/
I
n
l
i
n
e
C
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
L
o
w
e
s
t
 
s
e
t
 
b
i
t
:
 
<
I
n
l
i
n
e
C
o
d
e
>
n
 
&
a
m
p
;
 
-
n
<
/
I
n
l
i
n
e
C
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
l
e
a
r
 
l
o
w
e
s
t
 
s
e
t
 
b
i
t
:
 
<
I
n
l
i
n
e
C
o
d
e
>
n
 
&
a
m
p
;
 
(
n
-
1
)
<
/
I
n
l
i
n
e
C
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
I
s
 
p
o
w
e
r
 
o
f
 
2
:
 
<
I
n
l
i
n
e
C
o
d
e
>
n
 
&
g
t
;
 
0
 
&
a
m
p
;
&
a
m
p
;
 
(
n
 
&
a
m
p
;
 
(
n
-
1
)
)
 
=
=
 
0
<
/
I
n
l
i
n
e
C
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
w
a
p
 
w
i
t
h
o
u
t
 
t
e
m
p
:
 
<
I
n
l
i
n
e
C
o
d
e
>
a
 
^
=
 
b
;
 
b
 
^
=
 
a
;
 
a
 
^
=
 
b
<
/
I
n
l
i
n
e
C
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
t
e
r
v
i
e
w
 
t
r
a
p
:
 
t
w
o
&
r
s
q
u
o
;
s
 
c
o
m
p
l
e
m
e
n
t
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
I
n
 
8
-
b
i
t
 
t
w
o
&
r
s
q
u
o
;
s
 
c
o
m
p
l
e
m
e
n
t
,
 
-
1
 
=
 
1
1
1
1
1
1
1
1
 
a
n
d
 
~
n
 
=
 
-
n
 
-
 
1
.
 
S
h
i
f
t
i
n
g
 
s
i
g
n
e
d
 
n
u
m
b
e
r
s
 
i
s


 
 
 
 
 
 
 
 
 
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
-
d
e
f
i
n
e
d
 
i
n
 
s
o
m
e
 
l
a
n
g
u
a
g
e
s
;
 
a
r
i
t
h
m
e
t
i
c
 
s
h
i
f
t
 
r
i
g
h
t
 
p
r
e
s
e
r
v
e
s
 
t
h
e
 
s
i
g
n
 
b
i
t
.


 
 
 
 
 
 
 
 
 
 
A
l
w
a
y
s
 
s
p
e
c
i
f
y
 
s
i
g
n
e
d
 
v
s
 
u
n
s
i
g
n
e
d
 
o
n
 
M
C
Q
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
S
t
d
l
i
b
 
p
o
p
c
o
u
n
t
:
 
n
e
v
e
r
 
r
e
i
m
p
l
e
m
e
n
t
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
p
l
-
5
 
l
i
s
t
-
d
i
s
c
 
s
p
a
c
e
-
y
-
1
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
<
s
t
r
o
n
g
 
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
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
C
/
C
+
+
:
<
/
s
t
r
o
n
g
>
 
<
I
n
l
i
n
e
C
o
d
e
>
_
_
b
u
i
l
t
i
n
_
p
o
p
c
o
u
n
t
(
x
)
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
C
+
+
2
0
:
 
<
I
n
l
i
n
e
C
o
d
e
>
s
t
d
:
:
p
o
p
c
o
u
n
t
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
n
 
<
I
n
l
i
n
e
C
o
d
e
>
&
l
t
;
b
i
t
&
g
t
;
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
C
o
m
p
i
l
e
s
 
t
o
 
a
 
s
i
n
g
l
e
 
<
I
n
l
i
n
e
C
o
d
e
>
P
O
P
C
N
T
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
n
s
t
r
u
c
t
i
o
n
 
o
n
 
x
8
6
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
<
s
t
r
o
n
g
 
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
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
J
a
v
a
:
<
/
s
t
r
o
n
g
>
 
<
I
n
l
i
n
e
C
o
d
e
>
I
n
t
e
g
e
r
.
b
i
t
C
o
u
n
t
(
x
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
n
d
 
<
I
n
l
i
n
e
C
o
d
e
>
L
o
n
g
.
b
i
t
C
o
u
n
t
(
x
)
<
/
I
n
l
i
n
e
C
o
d
e
>
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
<
s
t
r
o
n
g
 
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
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
P
y
t
h
o
n
 
3
.
1
0
+
:
<
/
s
t
r
o
n
g
>
 
<
I
n
l
i
n
e
C
o
d
e
>
x
.
b
i
t
_
c
o
u
n
t
(
)
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
P
r
e
-
3
.
1
0
:
 
<
I
n
l
i
n
e
C
o
d
e
>
b
i
n
(
x
)
.
c
o
u
n
t
(
&
a
p
o
s
;
1
&
a
p
o
s
;
)
<
/
I
n
l
i
n
e
C
o
d
e
>
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
<
s
t
r
o
n
g
 
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
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
J
S
:
<
/
s
t
r
o
n
g
>
 
N
o
 
b
u
i
l
t
i
n
.
 
B
i
t
w
i
s
e
 
o
p
s
 
i
n
 
J
S
 
a
r
e
 
3
2
-
b
i
t
 
s
i
g
n
e
d
 
o
n
l
y
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
<
I
n
l
i
n
e
C
o
d
e
>
x
 
&
a
m
p
;
 
-
x
<
/
I
n
l
i
n
e
C
o
d
e
>
:
 
t
h
e
 
f
o
u
n
d
a
t
i
o
n
 
o
f
 
F
e
n
w
i
c
k
 
t
r
e
e
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
x
 
&
a
m
p
;
 
-
x
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
s
o
l
a
t
e
s
 
t
h
e
 
l
o
w
e
s
t
 
s
e
t
 
b
i
t
 
(
b
e
c
a
u
s
e
 
<
I
n
l
i
n
e
C
o
d
e
>
-
x
 
=
 
~
x
 
+
 
1
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
n
 
t
w
o
&
a
p
o
s
;
s
 
c
o
m
p
l
e
m
e
n
t
)
.


 
 
 
 
 
 
 
 
 
 
F
o
r
 
1
2
 
=
 
1
1
0
0
 
b
a
s
e
 
2
,
 
-
1
2
 
=
 
0
1
0
0
 
b
a
s
e
 
2
,
 
A
N
D
 
=
 
0
1
0
0
 
b
a
s
e
 
2
 
=
 
4
.


 
 
 
 
 
 
 
 
 
 
T
h
e
 
F
e
n
w
i
c
k
 
t
r
e
e
&
a
p
o
s
;
s
 
<
I
n
l
i
n
e
C
o
d
e
>
j
 
+
=
 
j
 
&
a
m
p
;
 
-
j
<
/
I
n
l
i
n
e
C
o
d
e
>
 
(
u
p
d
a
t
e
)
 
a
n
d
 
<
I
n
l
i
n
e
C
o
d
e
>
j
 
-
=
 
j
 
&
a
m
p
;
 
-
j
<
/
I
n
l
i
n
e
C
o
d
e
>
 
(
q
u
e
r
y
)
 
w
a
l
k
s
 
e
x
a
c
t
l
y
 
t
h
e
 
r
i
g
h
t
 
p
o
w
e
r
-
o
f
-
t
w
o
 
a
n
c
e
s
t
o
r
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
e
x
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
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
 
=
>
 
v
o
i
d
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
 
L
7
_
B
i
t
M
a
n
i
p
u
l
a
t
i
o
n
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
2
 
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
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
e
x
p
r
e
s
s
i
o
n
 
c
o
r
r
e
c
t
l
y
 
t
e
s
t
s
 
w
h
e
t
h
e
r
 
n
 
i
s
 
a
 
p
o
w
e
r
 
o
f
 
2
 
(
f
o
r
 
n
 
>
 
0
)
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
n
 
%
 
2
 
=
=
 
0
"
,
 
"
(
n
 
&
 
(
n
 
-
 
1
)
)
 
=
=
 
0
"
,
 
"
(
n
 
|
 
(
n
 
-
 
1
)
)
 
=
=
 
0
"
,
 
"
n
 
^
 
(
n
 
-
 
1
)
 
=
=
 
1
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
A
 
p
o
w
e
r
 
o
f
 
2
 
h
a
s
 
e
x
a
c
t
l
y
 
o
n
e
 
s
e
t
 
b
i
t
;
 
n
-
1
 
f
l
i
p
s
 
t
h
a
t
 
b
i
t
 
a
n
d
 
s
e
t
s
 
a
l
l
 
l
o
w
e
r
 
b
i
t
s
.
 
A
N
D
 
g
i
v
e
s
 
0
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
X
O
R
 
o
f
 
[
6
,
 
2
,
 
4
,
 
6
,
 
2
]
 
e
q
u
a
l
s
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
0
"
,
 
"
4
"
,
 
"
2
"
,
 
"
6
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
X
O
R
 
i
s
 
c
o
m
m
u
t
a
t
i
v
e
 
a
n
d
 
a
s
s
o
c
i
a
t
i
v
e
.
 
P
a
i
r
s
 
o
f
 
e
q
u
a
l
 
v
a
l
u
e
s
 
c
a
n
c
e
l
:
 
6
^
6
 
=
 
0
,
 
2
^
2
 
=
 
0
,
 
l
e
a
v
i
n
g
 
4
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
f
t
e
r
 
(
x
 
=
 
5
)
 
a
n
d
 
(
x
 
<
<
=
 
2
)
,
 
w
h
a
t
 
i
s
 
x
?
 
(
8
-
b
i
t
 
u
n
s
i
g
n
e
d
)
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
5
"
,
 
"
1
0
"
,
 
"
2
0
"
,
 
"
4
0
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
h
i
f
t
 
l
e
f
t
 
b
y
 
2
 
m
u
l
t
i
p
l
i
e
s
 
b
y
 
4
:
 
5
 
x
 
4
 
=
 
2
0
 
(
b
i
n
a
r
y
 
0
0
0
0
0
1
0
1
 
-
>
 
0
0
0
1
0
1
0
0
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
H
o
w
 
m
a
n
y
 
i
t
e
r
a
t
i
o
n
s
 
d
o
e
s
 
B
r
i
a
n
 
K
e
r
n
i
g
h
a
n
'
s
 
p
o
p
c
o
u
n
t
 
r
u
n
 
f
o
r
 
n
 
=
 
1
4
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
2
"
,
 
"
3
"
,
 
"
4
"
,
 
"
1
4
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
1
4
 
=
 
1
1
1
0
 
b
a
s
e
 
2
 
h
a
s
 
3
 
s
e
t
 
b
i
t
s
.
 
E
a
c
h
 
i
t
e
r
a
t
i
o
n
 
c
l
e
a
r
s
 
o
n
e
 
s
e
t
 
b
i
t
,
 
s
o
 
e
x
a
c
t
l
y
 
3
 
i
t
e
r
a
t
i
o
n
s
.
"
,


 
 
 
 
}
,


 
 
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
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
B
i
t
 
M
a
n
i
p
u
l
a
t
i
o
n
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
1
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
H
i
g
h
 
-
 
X
O
R
 
t
r
i
c
k
s
,
 
m
a
s
k
s
,
 
t
w
o
'
s
 
c
o
m
p
l
e
m
e
n
t
,
 
p
o
p
c
o
u
n
t
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
D
i
s
j
o
i
n
t
 
S
e
t
 
U
n
i
o
n
 
(
U
n
i
o
n
-
F
i
n
d
)
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


