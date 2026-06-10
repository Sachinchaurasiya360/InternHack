
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
a
r
r
a
y
s
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
e
l
l
S
t
a
t
e
 
t
y
p
e
 
+
 
l
o
c
a
l
 
M
e
m
o
r
y
C
e
l
l
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
 
C
e
l
l
S
t
a
t
e
 
=


 
 
|
 
"
d
e
f
a
u
l
t
"


 
 
|
 
"
a
c
t
i
v
e
"


 
 
|
 
"
c
o
m
p
a
r
e
"


 
 
|
 
"
s
w
a
p
"


 
 
|
 
"
d
o
n
e
"


 
 
|
 
"
v
i
s
i
t
e
d
"


 
 
|
 
"
m
a
t
c
h
"


 
 
|
 
"
m
i
s
m
a
t
c
h
"


 
 
|
 
"
w
i
n
d
o
w
"


 
 
|
 
"
m
i
d
"
;




c
o
n
s
t
 
C
E
L
L
_
C
O
L
O
R
S
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
{
 
b
g
:
 
s
t
r
i
n
g
;
 
b
o
r
d
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
 
t
e
x
t
:
 
s
t
r
i
n
g
 
}
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
 
{
 
b
g
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
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
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
,
 
 
 
t
e
x
t
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
 
}
,


 
 
a
c
t
i
v
e
:
 
 
 
{
 
b
g
:
 
"
#
d
b
e
a
f
e
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
3
b
8
2
f
6
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
1
e
3
a
8
a
"
 
}
,


 
 
c
o
m
p
a
r
e
:
 
 
{
 
b
g
:
 
"
#
f
e
f
9
c
3
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
e
a
b
3
0
8
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
7
1
3
f
1
2
"
 
}
,


 
 
s
w
a
p
:
 
 
 
 
 
{
 
b
g
:
 
"
#
f
c
e
7
f
3
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
e
c
4
8
9
9
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
8
3
1
8
4
3
"
 
}
,


 
 
d
o
n
e
:
 
 
 
 
 
{
 
b
g
:
 
"
#
d
1
f
a
e
5
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
1
0
b
9
8
1
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
0
6
4
e
3
b
"
 
}
,


 
 
v
i
s
i
t
e
d
:
 
 
{
 
b
g
:
 
"
#
f
1
f
5
f
9
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
9
4
a
3
b
8
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
4
7
5
5
6
9
"
 
}
,


 
 
m
a
t
c
h
:
 
 
 
 
{
 
b
g
:
 
"
#
d
c
f
c
e
7
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
2
2
c
5
5
e
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
1
4
5
3
2
d
"
 
}
,


 
 
m
i
s
m
a
t
c
h
:
 
{
 
b
g
:
 
"
#
f
e
e
2
e
2
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
e
f
4
4
4
4
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
7
f
1
d
1
d
"
 
}
,


 
 
w
i
n
d
o
w
:
 
 
 
{
 
b
g
:
 
"
#
e
d
e
9
f
e
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
8
b
5
c
f
6
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
3
b
0
7
6
4
"
 
}
,


 
 
m
i
d
:
 
 
 
 
 
 
{
 
b
g
:
 
"
#
f
f
e
d
d
5
"
,
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
#
f
9
7
3
1
6
"
,
 
 
 
 
 
 
t
e
x
t
:
 
"
#
7
c
2
d
1
2
"
 
}
,


}
;




f
u
n
c
t
i
o
n
 
M
e
m
o
r
y
C
e
l
l
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
s
h
o
w
A
d
d
r
e
s
s
,


 
 
a
d
d
r
e
s
s
B
a
s
e
,


 
 
b
y
t
e
s
P
e
r
C
e
l
l
,


 
 
c
e
l
l
W
i
d
t
h
 
=
 
5
6
,


}
:
 
{


 
 
v
a
l
u
e
s
:
 
(
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
)
[
]
;


 
 
s
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
r
s
?
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
 
n
u
m
b
e
r
>
;


 
 
s
h
o
w
A
d
d
r
e
s
s
?
:
 
b
o
o
l
e
a
n
;


 
 
a
d
d
r
e
s
s
B
a
s
e
?
:
 
n
u
m
b
e
r
;


 
 
b
y
t
e
s
P
e
r
C
e
l
l
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
e
l
l
W
i
d
t
h
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
)
 
{


 
 
c
o
n
s
t
 
p
t
M
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
n
u
m
b
e
r
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
}
;


 
 
i
f
 
(
p
o
i
n
t
e
r
s
)
 
{


 
 
 
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
p
o
i
n
t
e
r
s
)
.
f
o
r
E
a
c
h
(
(
[
k
,
 
v
]
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
!
p
t
M
a
p
[
v
]
)
 
p
t
M
a
p
[
v
]
 
=
 
[
]
;


 
 
 
 
 
 
p
t
M
a
p
[
v
]
.
p
u
s
h
(
k
)
;


 
 
 
 
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
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
w
-
f
u
l
l
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
i
n
l
i
n
e
-
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
1
"
>


 
 
 
 
 
 
 
 
{
/
*
 
p
o
i
n
t
e
r
 
l
a
b
e
l
s
 
a
b
o
v
e
 
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
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
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
 
c
e
l
l
W
i
d
t
h
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
M
a
p
[
i
]
 
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
[
9
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
7
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
p
t
M
a
p
[
i
]
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
h
-
3
"
 
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
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
{
/
*
 
c
e
l
l
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
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
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
 
s
t
a
t
e
:
 
C
e
l
l
S
t
a
t
e
 
=
 
s
t
a
t
e
s
?
.
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
s
 
=
 
C
E
L
L
_
C
O
L
O
R
S
[
s
t
a
t
e
]
 
?
?
 
C
E
L
L
_
C
O
L
O
R
S
.
d
e
f
a
u
l
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
 
r
o
u
n
d
e
d
 
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
 
d
u
r
a
t
i
o
n
-
2
0
0
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
 
c
e
l
l
W
i
d
t
h
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
c
e
l
l
W
i
d
t
h
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
l
o
r
s
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
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
c
o
l
o
r
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
c
o
l
o
r
s
.
t
e
x
t
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
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
9
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
 
m
t
-
0
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
 
c
o
l
o
r
:
 
c
o
l
o
r
s
.
t
e
x
t
,
 
o
p
a
c
i
t
y
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
i
}
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
{
/
*
 
a
d
d
r
e
s
s
e
s
 
b
e
l
o
w
 
*
/
}


 
 
 
 
 
 
 
 
{
s
h
o
w
A
d
d
r
e
s
s
 
&
&
 
a
d
d
r
e
s
s
B
a
s
e
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
b
y
t
e
s
P
e
r
C
e
l
l
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
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
v
a
l
u
e
s
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
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
t
e
x
t
-
[
9
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
 
c
e
l
l
W
i
d
t
h
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
d
d
r
e
s
s
B
a
s
e
 
+
 
i
 
*
 
b
y
t
e
s
P
e
r
C
e
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
y
p
e
s
 
+
 
p
a
r
s
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
v
a
l
u
e
s
:
 
(
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
)
[
]
;


 
 
s
t
a
t
e
s
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
>
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
 
p
a
r
s
e
A
r
r
a
y
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
 
n
u
m
b
e
r
[
]
 
{


 
 
r
e
t
u
r
n
 
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
(
x
)
 
=
>
 
x
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
 
 
O
p
e
r
a
t
i
o
n
 
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
I
N
S
E
R
T
 
=
 
[


 
 
"
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
s
e
r
t
A
t
(
a
,
 
i
d
x
,
 
v
a
l
u
e
)
:
"
,


 
 
"
 
 
f
o
r
 
i
 
f
r
o
m
 
n
-
1
 
d
o
w
n
 
t
o
 
i
d
x
:
"
,


 
 
"
 
 
 
 
a
[
i
+
1
]
 
←
 
a
[
i
]
"
,


 
 
"
 
 
a
[
i
d
x
]
 
←
 
v
a
l
u
e
"
,


 
 
"
 
 
n
 
←
 
n
 
+
 
1
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
 
b
u
i
l
d
I
n
s
e
r
t
(
b
a
s
e
:
 
n
u
m
b
e
r
[
]
,
 
i
d
x
:
 
n
u
m
b
e
r
,
 
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
 
=
 
[
.
.
.
b
a
s
e
,
 
0
]
;


 
 
c
o
n
s
t
 
n
 
=
 
b
a
s
e
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
 
s
h
o
w
 
=
 
(
)
 
=
>
 
a
.
s
l
i
c
e
(
0
,
 
n
 
+
 
1
)
;


 
 
f
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
 
n
,
 
i
d
x
,
 
v
a
l
u
e
 
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
I
n
s
e
r
t
 
$
{
v
a
l
u
e
}
 
a
t
 
i
n
d
e
x
 
$
{
i
d
x
}
.
 
E
v
e
r
y
t
h
i
n
g
 
a
t
 
o
r
 
a
f
t
e
r
 
$
{
i
d
x
}
 
m
u
s
t
 
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
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
s
h
o
w
(
)
,
 
s
t
a
t
e
s
:
 
s
h
o
w
(
)
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
n
e
w
:
 
i
d
x
 
}
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
 
n
 
-
 
1
;
 
i
 
>
=
 
i
d
x
;
 
i
-
-
)
 
{


 
 
 
 
f
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
 
v
a
l
u
e
,
 
n
 
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
L
o
o
k
 
a
t
 
i
n
d
e
x
 
$
{
i
}
.
 
I
t
 
w
i
l
l
 
m
o
v
e
 
t
o
 
$
{
i
 
+
 
1
}
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
s
h
o
w
(
)
,
 
s
t
a
t
e
s
:
 
s
h
o
w
(
)
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
?
 
"
a
c
t
i
v
e
"
 
:
 
k
 
=
=
=
 
i
 
+
 
1
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
}
)
;


 
 
 
 
a
[
i
 
+
 
1
]
 
=
 
a
[
i
]
;


 
 
 
 
f
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
 
v
a
l
u
e
,
 
n
 
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
h
i
f
t
:
 
a
[
$
{
i
 
+
 
1
}
]
 
←
 
a
[
$
{
i
}
]
 
=
 
$
{
a
[
i
 
+
 
1
]
}
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
s
h
o
w
(
)
,
 
s
t
a
t
e
s
:
 
s
h
o
w
(
)
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
+
 
1
 
?
 
"
s
w
a
p
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
}
)
;


 
 
}


 
 
a
[
i
d
x
]
 
=
 
v
a
l
u
e
;


 
 
f
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
d
x
,
 
v
a
l
u
e
 
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
P
l
a
c
e
 
t
h
e
 
n
e
w
 
v
a
l
u
e
:
 
a
[
$
{
i
d
x
}
]
 
=
 
$
{
v
a
l
u
e
}
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
s
h
o
w
(
)
,
 
s
t
a
t
e
s
:
 
s
h
o
w
(
)
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
d
x
 
?
 
"
d
o
n
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
d
x
 
}
,


 
 
}
)
;


 
 
f
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
:
 
n
 
+
 
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
A
r
r
a
y
 
l
e
n
g
t
h
 
i
s
 
n
o
w
 
$
{
n
 
+
 
1
}
.
 
T
o
t
a
l
 
s
h
i
f
t
s
:
 
$
{
n
 
-
 
i
d
x
}
 
→
 
O
(
n
)
 
w
o
r
s
t
 
c
a
s
e
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
s
h
o
w
(
)
,
 
s
t
a
t
e
s
:
 
s
h
o
w
(
)
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
d
o
n
e
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
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
;


}




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
D
E
L
E
T
E
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
d
e
l
e
t
e
A
t
(
a
,
 
i
d
x
)
:
"
,


 
 
"
 
 
f
o
r
 
i
 
f
r
o
m
 
i
d
x
 
t
o
 
n
-
2
:
"
,


 
 
"
 
 
 
 
a
[
i
]
 
←
 
a
[
i
+
1
]
"
,


 
 
"
 
 
n
 
←
 
n
 
-
 
1
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
 
b
u
i
l
d
D
e
l
e
t
e
(
b
a
s
e
:
 
n
u
m
b
e
r
[
]
,
 
i
d
x
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
 
=
 
[
.
.
.
b
a
s
e
]
;


 
 
c
o
n
s
t
 
n
 
=
 
b
a
s
e
.
l
e
n
g
t
h
;


 
 
f
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
 
n
,
 
i
d
x
 
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
D
e
l
e
t
e
 
a
[
$
{
i
d
x
}
]
 
=
 
$
{
a
[
i
d
x
]
}
.
 
E
v
e
r
y
t
h
i
n
g
 
a
f
t
e
r
 
s
h
i
f
t
s
 
l
e
f
t
 
t
o
 
c
l
o
s
e
 
t
h
e
 
g
a
p
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
d
x
 
?
 
"
s
w
a
p
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
d
x
 
}
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
 
i
d
x
;
 
i
 
<
 
n
 
-
 
1
;
 
i
+
+
)
 
{


 
 
 
 
f
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
L
o
o
k
 
a
t
 
i
n
d
e
x
 
$
{
i
 
+
 
1
}
.
 
I
t
s
 
v
a
l
u
e
 
w
i
l
l
 
m
o
v
e
 
t
o
 
$
{
i
}
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
?
 
"
a
c
t
i
v
e
"
 
:
 
k
 
=
=
=
 
i
 
+
 
1
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
}
)
;


 
 
 
 
a
[
i
]
 
=
 
a
[
i
 
+
 
1
]
;


 
 
 
 
f
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
h
i
f
t
:
 
a
[
$
{
i
}
]
 
←
 
a
[
$
{
i
 
+
 
1
}
]
 
=
 
$
{
a
[
i
]
}
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
?
 
"
s
w
a
p
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
}
)
;


 
 
}


 
 
c
o
n
s
t
 
s
h
r
u
n
k
 
=
 
a
.
s
l
i
c
e
(
0
,
 
n
 
-
 
1
)
;


 
 
f
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
:
 
n
 
-
 
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
A
r
r
a
y
 
l
e
n
g
t
h
 
i
s
 
n
o
w
 
$
{
n
 
-
 
1
}
.
 
T
o
t
a
l
 
s
h
i
f
t
s
:
 
$
{
n
 
-
 
1
 
-
 
i
d
x
}
 
→
 
O
(
n
)
 
w
o
r
s
t
 
c
a
s
e
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
s
h
r
u
n
k
,
 
s
t
a
t
e
s
:
 
s
h
r
u
n
k
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
d
o
n
e
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
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
;


}




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
L
I
N
E
A
R
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
l
i
n
e
a
r
S
e
a
r
c
h
(
a
,
 
t
a
r
g
e
t
)
:
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
0
.
.
n
-
1
:
"
,


 
 
"
 
 
 
 
i
f
 
a
[
i
]
 
=
=
 
t
a
r
g
e
t
:
"
,


 
 
"
 
 
 
 
 
 
r
e
t
u
r
n
 
i
"
,


 
 
"
 
 
r
e
t
u
r
n
 
-
1
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
 
b
u
i
l
d
L
i
n
e
a
r
(
a
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
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
 
n
 
=
 
a
.
l
e
n
g
t
h
;


 
 
f
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
 
n
,
 
t
a
r
g
e
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
S
c
a
n
 
l
e
f
t
-
t
o
-
r
i
g
h
t
 
l
o
o
k
i
n
g
 
f
o
r
 
$
{
t
a
r
g
e
t
}
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
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
 
n
;
 
i
+
+
)
 
{


 
 
 
 
f
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
 
t
a
r
g
e
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
I
n
s
p
e
c
t
 
a
[
$
{
i
}
]
 
=
 
$
{
a
[
i
]
}
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
?
 
"
a
c
t
i
v
e
"
 
:
 
k
 
<
 
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
}
)
;


 
 
 
 
f
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
 
t
a
r
g
e
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
m
p
a
r
e
:
 
i
s
 
a
[
$
{
i
}
]
 
(
$
{
a
[
i
]
}
)
 
=
=
 
$
{
t
a
r
g
e
t
}
?
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
k
 
<
 
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
a
[
i
]
 
=
=
=
 
t
a
r
g
e
t
)
 
{


 
 
 
 
 
 
f
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
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
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
M
a
t
c
h
!
 
R
e
t
u
r
n
 
i
n
d
e
x
 
$
{
i
}
.
`
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
i
 
?
 
"
m
a
t
c
h
"
 
:
 
k
 
<
 
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
 
}
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
;


 
 
 
 
}


 
 
}


 
 
f
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
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
-
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
E
n
d
 
o
f
 
a
r
r
a
y
.
 
$
{
t
a
r
g
e
t
}
 
i
s
 
n
o
t
 
p
r
e
s
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
 
-
1
.
 
W
o
r
s
t
 
c
a
s
e
 
i
s
 
O
(
n
)
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
]
,
 
s
t
a
t
e
s
:
 
a
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
v
i
s
i
t
e
d
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
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
;


}




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
B
I
N
A
R
Y
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
b
i
n
a
r
y
S
e
a
r
c
h
(
a
,
 
t
a
r
g
e
t
)
:
 
 
#
 
a
 
m
u
s
t
 
b
e
 
s
o
r
t
e
d
"
,


 
 
"
 
 
l
o
 
←
 
0
,
 
h
i
 
←
 
n
 
-
 
1
"
,


 
 
"
 
 
w
h
i
l
e
 
l
o
 
<
=
 
h
i
:
"
,


 
 
"
 
 
 
 
m
i
d
 
←
 
(
l
o
 
+
 
h
i
)
 
/
 
2
"
,


 
 
"
 
 
 
 
i
f
 
a
[
m
i
d
]
 
=
=
 
t
a
r
g
e
t
:
 
r
e
t
u
r
n
 
m
i
d
"
,


 
 
"
 
 
 
 
i
f
 
a
[
m
i
d
]
 
<
 
t
a
r
g
e
t
:
 
l
o
 
←
 
m
i
d
 
+
 
1
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
h
i
 
←
 
m
i
d
 
-
 
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
 
-
1
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
 
b
u
i
l
d
B
i
n
a
r
y
(
a
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
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
 
s
o
r
t
e
d
 
=
 
[
.
.
.
a
]
.
s
o
r
t
(
(
x
,
 
y
)
 
=
>
 
x
 
-
 
y
)
;


 
 
c
o
n
s
t
 
n
 
=
 
s
o
r
t
e
d
.
l
e
n
g
t
h
;


 
 
l
e
t
 
l
o
 
=
 
0
,
 
h
i
 
=
 
n
 
-
 
1
;


 
 
f
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
 
n
,
 
t
a
r
g
e
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
n
a
r
y
 
s
e
a
r
c
h
 
n
e
e
d
s
 
a
 
s
o
r
t
e
d
 
a
r
r
a
y
.
 
W
e
 
s
o
r
t
 
f
i
r
s
t
:
 
[
$
{
s
o
r
t
e
d
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
]
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
,


 
 
}
)
;


 
 
f
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
 
l
o
,
 
h
i
,
 
t
a
r
g
e
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
S
e
t
 
t
h
e
 
s
e
a
r
c
h
 
w
i
n
d
o
w
:
 
l
o
 
=
 
0
,
 
h
i
 
=
 
$
{
h
i
}
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
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
d
e
f
a
u
l
t
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
 
}
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
l
o
 
<
=
 
h
i
)
 
{


 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
M
a
t
h
.
f
l
o
o
r
(
(
l
o
 
+
 
h
i
)
 
/
 
2
)
;


 
 
 
 
f
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
 
l
o
,
 
h
i
,
 
t
a
r
g
e
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
W
i
n
d
o
w
 
[
$
{
l
o
}
.
.
$
{
h
i
}
]
 
n
o
n
-
e
m
p
t
y
.
 
C
o
n
t
i
n
u
e
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
<
 
l
o
 
|
|
 
k
 
>
 
h
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
 
}
,


 
 
 
 
}
)
;


 
 
 
 
f
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
 
l
o
,
 
h
i
,
 
m
i
d
,
 
t
a
r
g
e
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
P
i
c
k
 
t
h
e
 
m
i
d
d
l
e
:
 
m
i
d
 
=
 
⌊
(
$
{
l
o
}
+
$
{
h
i
}
)
/
2
⌋
 
=
 
$
{
m
i
d
}
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
m
i
d
 
?
 
"
m
i
d
"
 
:
 
k
 
<
 
l
o
 
|
|
 
k
 
>
 
h
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
m
i
d
,
 
h
i
 
}
,


 
 
 
 
}
)
;


 
 
 
 
f
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
 
m
i
d
,
 
t
a
r
g
e
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
m
p
a
r
e
 
a
[
$
{
m
i
d
}
]
 
=
 
$
{
s
o
r
t
e
d
[
m
i
d
]
}
 
w
i
t
h
 
$
{
t
a
r
g
e
t
}
.
`
,


 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
m
i
d
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
k
 
<
 
l
o
 
|
|
 
k
 
>
 
h
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
m
i
d
,
 
h
i
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
s
o
r
t
e
d
[
m
i
d
]
 
=
=
=
 
t
a
r
g
e
t
)
 
{


 
 
 
 
 
 
f
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
 
m
i
d
,
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
m
i
d
 
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
M
a
t
c
h
!
 
R
e
t
u
r
n
 
$
{
m
i
d
}
.
`
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
m
i
d
 
?
 
"
m
a
t
c
h
"
 
:
 
k
 
<
 
l
o
 
|
|
 
k
 
>
 
h
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
m
i
d
 
}
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
;


 
 
 
 
}


 
 
 
 
i
f
 
(
s
o
r
t
e
d
[
m
i
d
]
 
<
 
t
a
r
g
e
t
)
 
{


 
 
 
 
 
 
l
o
 
=
 
m
i
d
 
+
 
1
;


 
 
 
 
 
 
f
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
 
l
o
,
 
h
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
a
[
$
{
m
i
d
}
]
 
<
 
$
{
t
a
r
g
e
t
}
,
 
s
o
 
t
h
r
o
w
 
a
w
a
y
 
t
h
e
 
l
e
f
t
 
h
a
l
f
.
 
l
o
 
←
 
$
{
l
o
}
.
`
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
<
 
l
o
 
|
|
 
k
 
>
 
h
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
h
i
 
=
 
m
i
d
 
-
 
1
;


 
 
 
 
 
 
f
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
 
6
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
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
a
[
$
{
m
i
d
}
]
 
>
 
$
{
t
a
r
g
e
t
}
,
 
s
o
 
t
h
r
o
w
 
a
w
a
y
 
t
h
e
 
r
i
g
h
t
 
h
a
l
f
.
 
h
i
 
←
 
$
{
h
i
}
.
`
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
<
 
l
o
 
|
|
 
k
 
>
 
h
i
 
?
 
"
v
i
s
i
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
,


 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
}


 
 
f
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
 
7
,
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
-
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
W
i
n
d
o
w
 
e
m
p
t
y
.
 
$
{
t
a
r
g
e
t
}
 
n
o
t
 
p
r
e
s
e
n
t
.
 
T
o
t
a
l
 
s
t
e
p
s
 
≈
 
l
o
g
₂
(
n
)
 
→
 
O
(
l
o
g
 
n
)
.
`
,


 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
s
t
a
t
e
s
:
 
s
o
r
t
e
d
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
v
i
s
i
t
e
d
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
}
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
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
s
e
r
t
"
 
|
 
"
d
e
l
e
t
e
"
 
|
 
"
l
i
n
e
a
r
"
 
|
 
"
b
i
n
a
r
y
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
i
n
s
e
r
t
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
r
r
S
t
r
,
 
s
e
t
A
r
r
S
t
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
1
0
,
 
2
0
,
 
3
0
,
 
4
0
,
 
5
0
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
r
a
m
S
t
r
,
 
s
e
t
P
a
r
a
m
S
t
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
2
 
:
 
9
9
"
)
;




 
 
c
o
n
s
t
 
b
a
s
e
 
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
 
p
a
r
s
e
A
r
r
a
y
(
a
r
r
S
t
r
)
,
 
[
a
r
r
S
t
r
]
)
;




 
 
c
o
n
s
t
 
{
 
p
s
e
u
d
o
,
 
f
r
a
m
e
s
,
 
h
e
l
p
e
r
 
}
 
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
 
{


 
 
 
 
c
o
n
s
t
 
p
a
r
t
s
 
=
 
p
a
r
a
m
S
t
r
.
s
p
l
i
t
(
"
:
"
)
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
 
s
.
t
r
i
m
(
)
)
;


 
 
 
 
c
o
n
s
t
 
p
1
 
=
 
N
u
m
b
e
r
(
p
a
r
t
s
[
0
]
)
;


 
 
 
 
c
o
n
s
t
 
p
2
 
=
 
N
u
m
b
e
r
(
p
a
r
t
s
[
1
]
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
i
n
s
e
r
t
"
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
b
a
s
e
.
l
e
n
g
t
h
,
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
p
1
)
 
?
 
M
a
t
h
.
f
l
o
o
r
(
p
1
)
 
:
 
0
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
v
a
l
 
=
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
p
2
)
 
?
 
p
2
 
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
 
p
s
e
u
d
o
:
 
P
S
E
U
D
O
_
I
N
S
E
R
T
,
 
f
r
a
m
e
s
:
 
b
u
i
l
d
I
n
s
e
r
t
(
b
a
s
e
,
 
i
d
x
,
 
v
a
l
)
,
 
h
e
l
p
e
r
:
 
"
F
o
r
m
a
t
:
 
i
n
d
e
x
 
:
 
v
a
l
u
e
,
 
e
.
g
.
 
2
 
:
 
9
9
"
 
}
;


 
 
 
 
}


 
 
 
 
i
f
 
(
o
p
 
=
=
=
 
"
d
e
l
e
t
e
"
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
 
b
a
s
e
.
l
e
n
g
t
h
 
-
 
1
)
,
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
p
1
)
 
?
 
M
a
t
h
.
f
l
o
o
r
(
p
1
)
 
:
 
0
)
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
p
s
e
u
d
o
:
 
P
S
E
U
D
O
_
D
E
L
E
T
E
,
 
f
r
a
m
e
s
:
 
b
u
i
l
d
D
e
l
e
t
e
(
b
a
s
e
,
 
i
d
x
)
,
 
h
e
l
p
e
r
:
 
"
F
o
r
m
a
t
:
 
i
n
d
e
x
,
 
e
.
g
.
 
2
"
 
}
;


 
 
 
 
}


 
 
 
 
i
f
 
(
o
p
 
=
=
=
 
"
l
i
n
e
a
r
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
p
1
)
 
?
 
p
1
 
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
 
p
s
e
u
d
o
:
 
P
S
E
U
D
O
_
L
I
N
E
A
R
,
 
f
r
a
m
e
s
:
 
b
u
i
l
d
L
i
n
e
a
r
(
b
a
s
e
,
 
t
a
r
g
e
t
)
,
 
h
e
l
p
e
r
:
 
"
F
o
r
m
a
t
:
 
t
a
r
g
e
t
,
 
e
.
g
.
 
3
0
"
 
}
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
p
1
)
 
?
 
p
1
 
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
 
p
s
e
u
d
o
:
 
P
S
E
U
D
O
_
B
I
N
A
R
Y
,
 
f
r
a
m
e
s
:
 
b
u
i
l
d
B
i
n
a
r
y
(
b
a
s
e
,
 
t
a
r
g
e
t
)
,
 
h
e
l
p
e
r
:
 
"
F
o
r
m
a
t
:
 
t
a
r
g
e
t
,
 
e
.
g
.
 
3
0
 
(
a
r
r
a
y
 
i
s
 
a
u
t
o
-
s
o
r
t
e
d
)
"
 
}
;


 
 
}
,
 
[
o
p
,
 
b
a
s
e
,
 
p
a
r
a
m
S
t
r
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
 
o
p
L
a
b
e
l
s
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
>
 
=
 
{


 
 
 
 
i
n
s
e
r
t
:
 
"
I
n
s
e
r
t
,
 
O
(
n
)
"
,


 
 
 
 
d
e
l
e
t
e
:
 
"
D
e
l
e
t
e
,
 
O
(
n
)
"
,


 
 
 
 
l
i
n
e
a
r
:
 
"
L
i
n
e
a
r
 
S
e
a
r
c
h
,
 
O
(
n
)
"
,


 
 
 
 
b
i
n
a
r
y
:
 
"
B
i
n
a
r
y
 
S
e
a
r
c
h
,
 
O
(
l
o
g
 
n
)
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
o
p
L
a
b
e
l
s
[
o
p
]
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
3
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
A
r
r
a
y
 
v
a
l
u
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
a
r
r
S
t
r
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
e
.
g
.
 
1
0
,
 
2
0
,
 
3
0
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
S
m
a
l
l
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
 
1
2
,
 
3
,
 
8
,
 
1
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
S
o
r
t
e
d
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
 
7
,
 
1
1
,
 
1
9
,
 
2
5
,
 
3
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
D
u
p
l
i
c
a
t
e
s
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
,
 
4
,
 
4
,
 
7
,
 
4
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
 
{
 
i
f
 
(
p
a
r
s
e
A
r
r
a
y
(
v
)
.
l
e
n
g
t
h
 
>
 
0
)
 
s
e
t
A
r
r
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
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
 
n
 
=
 
5
 
+
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
4
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
 
n
 
}
,
 
(
)
 
=
>
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
9
0
)
 
+
 
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
A
r
r
S
t
r
(
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
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
P
a
r
a
m
e
t
e
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
a
r
a
m
S
t
r
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
{
h
e
l
p
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
{
h
e
l
p
e
r
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
P
a
r
a
m
S
t
r
(
v
)
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
1
.
5
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
 
u
p
p
e
r
c
a
s
e
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
o
p
e
r
a
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
O
b
j
e
c
t
.
k
e
y
s
(
o
p
L
a
b
e
l
s
)
 
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
i
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
i
d
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
O
p
(
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
"
i
n
s
e
r
t
"
)
 
s
e
t
P
a
r
a
m
S
t
r
(
"
2
 
:
 
9
9
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
i
d
 
=
=
=
 
"
d
e
l
e
t
e
"
)
 
s
e
t
P
a
r
a
m
S
t
r
(
"
2
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
s
e
t
P
a
r
a
m
S
t
r
(
"
3
0
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
 
i
d
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
o
p
L
a
b
e
l
s
[
i
d
]
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
p
s
e
u
d
o
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
[
"
i
"
,
 
"
m
i
d
"
,
 
"
l
o
"
,
 
"
h
i
"
,
 
"
f
o
u
n
d
"
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
"
>


 
 
 
 
 
 
 
 
<
M
e
m
o
r
y
C
e
l
l
s


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
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
l
u
e
s
 
?
?
 
[
]
}


 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
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
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
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
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
s
h
o
w
A
d
d
r
e
s
s


 
 
 
 
 
 
 
 
 
 
a
d
d
r
e
s
s
B
a
s
e
=
{
1
0
0
0
}


 
 
 
 
 
 
 
 
 
 
b
y
t
e
s
P
e
r
C
e
l
l
=
{
4
}


 
 
 
 
 
 
 
 
 
 
c
e
l
l
W
i
d
t
h
=
{
6
0
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
a
r
t
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
 
 
L
e
a
r
n
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
o
w
s
 
=
 
[


 
 
 
 
[
"
A
c
c
e
s
s
 
a
[
i
]
"
,
 
"
O
(
1
)
"
,
 
"
A
d
d
r
e
s
s
 
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
"
]
,


 
 
 
 
[
"
L
i
n
e
a
r
 
s
e
a
r
c
h
"
,
 
"
O
(
n
)
"
,
 
"
M
u
s
t
 
c
h
e
c
k
 
e
a
c
h
 
e
l
e
m
e
n
t
"
]
,


 
 
 
 
[
"
B
i
n
a
r
y
 
s
e
a
r
c
h
 
(
s
o
r
t
e
d
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
H
a
l
v
e
 
t
h
e
 
w
i
n
d
o
w
 
e
a
c
h
 
s
t
e
p
"
]
,


 
 
 
 
[
"
I
n
s
e
r
t
 
a
t
 
e
n
d
"
,
 
"
O
(
1
)
*
"
,
 
"
N
o
 
s
h
i
f
t
 
n
e
e
d
e
d
 
(
*
a
m
o
r
t
i
s
e
d
 
f
o
r
 
d
y
n
a
m
i
c
 
a
r
r
a
y
s
)
"
]
,


 
 
 
 
[
"
I
n
s
e
r
t
 
a
t
 
i
n
d
e
x
"
,
 
"
O
(
n
)
"
,
 
"
M
u
s
t
 
s
h
i
f
t
 
l
a
t
e
r
 
e
l
e
m
e
n
t
s
 
r
i
g
h
t
"
]
,


 
 
 
 
[
"
D
e
l
e
t
e
 
a
t
 
i
n
d
e
x
"
,
 
"
O
(
n
)
"
,
 
"
M
u
s
t
 
s
h
i
f
t
 
l
a
t
e
r
 
e
l
e
m
e
n
t
s
 
l
e
f
t
"
]
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
a
r
r
a
y
s
 
=
 
c
o
n
t
i
g
u
o
u
s
 
m
e
m
o
r
y
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
S
a
m
e
-
s
i
z
e
d
 
c
e
l
l
s
,
 
s
i
d
e
 
b
y
 
s
i
d
e
,
 
i
n
d
e
x
e
d
 
i
n
 
O
(
1
)
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


 
 
 
 
 
 
 
 
 
 
A
n
 
a
r
r
a
y
 
i
s
 
a
 
b
l
o
c
k
 
o
f
 
s
a
m
e
-
s
i
z
e
d
 
c
e
l
l
s
 
p
l
a
c
e
d
 
s
i
d
e
-
b
y
-
s
i
d
e
 
i
n
 
R
A
M
.
 
B
e
c
a
u
s
e
 
e
v
e
r
y
 
c
e
l
l


 
 
 
 
 
 
 
 
 
 
i
s
 
a
t
 
a
 
k
n
o
w
n
 
o
f
f
s
e
t
 
f
r
o
m
 
t
h
e
 
a
r
r
a
y
'
s
 
s
t
a
r
t
i
n
g
 
a
d
d
r
e
s
s
,
 
t
h
e
 
C
P
U
 
c
a
n
 
c
o
m
p
u
t
e
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
a
s
e
 
+
 
i
 
×
 
s
i
z
e
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
 
a
 
s
i
n
g
l
e
 
s
t
e
p
,
 
t
h
a
t
 
i
s
 
w
h
y
 
i
n
d
e
x
i
n
g
 
i
s
 
O
(
1
)
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
C
a
r
d
 
p
a
d
d
e
d
=
{
f
a
l
s
e
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
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
<
t
a
b
l
e
 
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
t
h
e
a
d
 
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
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
O
p
e
r
a
t
i
o
n
"
,
 
"
T
i
m
e
"
,
 
"
W
h
y
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
h
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
l
e
f
t
 
p
x
-
4
 
p
y
-
3
 
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
 
u
p
p
e
r
c
a
s
e
 
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
 
b
o
r
d
e
r
-
b
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
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
{
i
 
=
=
=
 
0
 
?
 
"
"
 
:
 
"
b
o
r
d
e
r
-
t
 
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
1
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
5
"
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
4
 
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
1
0
0
"
>
{
r
[
0
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
4
 
p
y
-
2
 
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
7
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
"
>
{
r
[
1
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
4
 
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
"
>
{
r
[
2
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
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
a
t
i
c
 
v
s
 
D
y
n
a
m
i
c
 
a
r
r
a
y
s
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


 
 
 
 
 
 
 
 
 
 
S
t
a
t
i
c
 
a
r
r
a
y
s
 
h
a
v
e
 
a
 
f
i
x
e
d
 
c
a
p
a
c
i
t
y
 
c
h
o
s
e
n
 
a
t
 
c
r
e
a
t
i
o
n
.
 
D
y
n
a
m
i
c
 
a
r
r
a
y
s
 
(
C
+
+
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
v
e
c
t
o
r
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
,
 
J
a
v
a
 
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
A
r
r
a
y
L
i
s
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
,
 
P
y
t
h
o
n
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
l
i
s
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
)
 
g
r
o
w
 
b
y
 
a
l
l
o
c
a
t
i
n
g
 
a
 
b
i
g
g
e
r
 
b
l
o
c
k
 
a
n
d
 
c
o
p
y
i
n
g
,
 
a
m
o
r
t
i
s
e
d


 
 
 
 
 
 
 
 
 
 
O
(
1
)
 
a
p
p
e
n
d
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
 
 
T
r
y
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
G
i
v
e
n
 
a
 
=
 
[
5
,
1
0
,
1
5
,
2
0
]
,
 
h
o
w
 
m
a
n
y
 
s
h
i
f
t
s
 
d
o
e
s
 
i
n
s
e
r
t
A
t
(
a
,
 
1
,
 
9
9
)
 
p
e
r
f
o
r
m
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
0
"
,
 
"
1
"
,
 
"
3
"
,
 
"
4
"
]
,
 
a
n
s
:
 
2
,
 
e
x
p
:
 
"
E
l
e
m
e
n
t
s
 
a
t
 
i
n
d
i
c
e
s
 
1
,
 
2
,
 
3
 
(
t
h
r
e
e
 
e
l
e
m
e
n
t
s
)
 
m
u
s
t
 
m
o
v
e
 
r
i
g
h
t
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
L
i
n
e
a
r
 
s
e
a
r
c
h
 
o
n
 
a
n
 
a
r
r
a
y
 
o
f
 
s
i
z
e
 
8
 
f
o
r
 
a
n
 
e
l
e
m
e
n
t
 
a
t
 
i
n
d
e
x
 
5
 
m
a
k
e
s
 
h
o
w
 
m
a
n
y
 
c
o
m
p
a
r
i
s
o
n
s
 
i
n
 
t
h
e
 
w
o
r
s
t
 
o
b
s
e
r
v
e
d
 
c
a
s
e
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
1
"
,
 
"
4
"
,
 
"
6
"
,
 
"
8
"
]
,
 
a
n
s
:
 
2
,
 
e
x
p
:
 
"
W
e
 
c
o
m
p
a
r
e
 
i
n
d
e
x
 
0
,
 
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
t
h
a
t
 
i
s
 
6
 
c
o
m
p
a
r
i
s
o
n
s
 
b
e
f
o
r
e
 
t
h
e
 
m
a
t
c
h
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
B
i
n
a
r
y
 
s
e
a
r
c
h
 
o
n
 
1
6
 
e
l
e
m
e
n
t
s
 
n
e
e
d
s
 
a
t
 
m
o
s
t
 
h
o
w
 
m
a
n
y
 
c
o
m
p
a
r
i
s
o
n
s
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
4
"
,
 
"
8
"
,
 
"
1
6
"
]
,
 
a
n
s
:
 
1
,
 
e
x
p
:
 
"
l
o
g
₂
(
1
6
)
 
=
 
4
.
 
E
a
c
h
 
s
t
e
p
 
h
a
l
v
e
s
 
t
h
e
 
w
i
n
d
o
w
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
W
h
i
c
h
 
o
p
e
r
a
t
i
o
n
 
i
s
 
O
(
1
)
 
o
n
 
a
 
d
y
n
a
m
i
c
 
a
r
r
a
y
 
m
o
s
t
 
o
f
 
t
h
e
 
t
i
m
e
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
I
n
s
e
r
t
 
a
t
 
f
r
o
n
t
"
,
 
"
I
n
s
e
r
t
 
a
t
 
b
a
c
k
"
,
 
"
D
e
l
e
t
e
 
a
t
 
f
r
o
n
t
"
,
 
"
S
e
a
r
c
h
"
]
,
 
a
n
s
:
 
1
,
 
e
x
p
:
 
"
B
a
c
k
-
i
n
s
e
r
t
 
j
u
s
t
 
w
r
i
t
e
s
 
a
t
 
t
h
e
 
e
n
d
 
(
a
m
o
r
t
i
s
e
d
 
O
(
1
)
 
w
i
t
h
 
o
c
c
a
s
i
o
n
a
l
 
r
e
s
i
z
e
)
.
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
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
e
d
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
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
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
 
n
u
l
l
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
 
s
e
l
 
=
 
p
i
c
k
e
d
[
i
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
1
0
0
 
m
b
-
3
 
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
l
i
m
e
-
7
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
"
>
#
{
i
 
+
 
1
}
.
<
/
s
t
r
o
n
g
>
 
{
p
.
q
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
o
p
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
o
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
 
c
o
r
r
e
c
t
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
p
.
a
n
s
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
r
o
n
g
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
s
e
l
 
&
&
 
i
d
x
 
!
=
=
 
p
.
a
n
s
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
v
 
=
 
[
.
.
.
p
i
c
k
e
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
i
c
k
e
d
(
v
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
{
`
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
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
5
0
0
 
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
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
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
8
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
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
w
r
o
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
r
o
s
e
-
5
0
0
 
b
g
-
r
o
s
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
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
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
r
o
s
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
7
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
3
0
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
!
=
=
 
n
u
l
l
 
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
t
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
{
p
.
e
x
p
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
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
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
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
C
a
c
h
e
 
l
o
c
a
l
i
t
y
,
 
a
r
r
a
y
s
'
 
s
e
c
r
e
t
 
a
d
v
a
n
t
a
g
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


 
 
 
 
 
 
 
 
 
 
B
e
c
a
u
s
e
 
a
r
r
a
y
 
c
e
l
l
s
 
s
i
t
 
n
e
x
t
 
t
o
 
e
a
c
h
 
o
t
h
e
r
,
 
s
c
a
n
n
i
n
g
 
t
h
e
m
 
i
s
 
b
l
a
z
i
n
g
 
f
a
s
t
,
 
t
h
e
 
C
P
U


 
 
 
 
 
 
 
 
 
 
p
r
e
f
e
t
c
h
e
s
 
n
e
i
g
h
b
o
u
r
i
n
g
 
m
e
m
o
r
y
.
 
A
 
l
i
n
k
e
d
 
l
i
s
t
 
w
i
t
h
 
t
h
e
 
s
a
m
e
 
O
(
n
)
 
l
o
o
p
 
c
a
n
 
b
e
 
5
–
1
0
×


 
 
 
 
 
 
 
 
 
 
s
l
o
w
e
r
 
i
n
 
p
r
a
c
t
i
c
e
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
W
h
e
n
 
t
o
 
p
i
c
k
 
a
n
 
a
r
r
a
y
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
.
5
 
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
l
i
>
Y
o
u
 
n
e
e
d
 
f
a
s
t
 
r
a
n
d
o
m
 
a
c
c
e
s
s
 
b
y
 
i
n
d
e
x
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
D
a
t
a
 
f
i
t
s
 
i
n
 
a
 
p
r
e
d
i
c
t
a
b
l
e
 
c
o
n
t
i
g
u
o
u
s
 
b
l
o
c
k
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
M
o
s
t
 
m
u
t
a
t
i
o
n
s
 
h
a
p
p
e
n
 
n
e
a
r
 
t
h
e
 
e
n
d
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
W
h
e
n
 
t
o
 
a
v
o
i
d
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
.
5
 
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
l
i
>
F
r
e
q
u
e
n
t
 
i
n
s
e
r
t
s
/
d
e
l
e
t
e
s
 
i
n
 
t
h
e
 
m
i
d
d
l
e
:
 
u
s
e
 
l
i
n
k
e
d
 
l
i
s
t
 
o
r
 
d
e
q
u
e
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
U
n
k
n
o
w
n
 
m
a
x
i
m
u
m
 
s
i
z
e
 
w
i
t
h
 
s
t
r
i
c
t
 
m
e
m
o
r
y
 
l
i
m
i
t
s
:
 
u
s
e
 
d
y
n
a
m
i
c
 
a
r
r
a
y
 
w
i
t
h
 
r
e
s
e
r
v
e
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
1
_
A
r
r
a
y
s
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
y
 
i
s
 
a
[
i
]
 
c
o
m
p
u
t
e
d
 
i
n
 
O
(
1
)
 
t
i
m
e
 
o
n
 
a
 
c
o
n
t
i
g
u
o
u
s
 
a
r
r
a
y
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
T
h
e
 
C
P
U
 
s
c
a
n
s
 
f
r
o
m
 
t
h
e
 
s
t
a
r
t
 
u
n
t
i
l
 
i
t
 
r
e
a
c
h
e
s
 
i
n
d
e
x
 
i
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
a
d
d
r
e
s
s
 
i
s
 
c
a
l
c
u
l
a
t
e
d
 
d
i
r
e
c
t
l
y
:
 
b
a
s
e
 
+
 
i
 
·
 
e
l
e
m
e
n
t
_
s
i
z
e
"
,


 
 
 
 
 
 
 
 
"
A
r
r
a
y
s
 
s
t
o
r
e
 
a
 
h
a
s
h
 
m
a
p
 
i
n
t
e
r
n
a
l
l
y
"
,


 
 
 
 
 
 
 
 
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
 
m
e
m
o
r
i
s
e
 
a
l
l
 
a
r
r
a
y
 
v
a
l
u
e
s
"
,


 
 
 
 
 
 
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
I
n
d
e
x
i
n
g
 
i
s
 
p
u
r
e
 
a
d
d
r
e
s
s
 
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
 
n
o
 
l
o
o
p
,
 
n
o
 
s
e
a
r
c
h
.
 
T
h
a
t
 
i
s
 
t
h
e
 
d
e
f
i
n
i
n
g
 
a
d
v
a
n
t
a
g
e
 
o
f
 
a
r
r
a
y
s
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
W
h
i
c
h
 
o
p
e
r
a
t
i
o
n
 
i
s
 
n
o
t
 
O
(
n
)
 
i
n
 
t
h
e
 
w
o
r
s
t
 
c
a
s
e
 
o
n
 
a
 
p
l
a
i
n
 
a
r
r
a
y
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
I
n
s
e
r
t
 
a
t
 
i
n
d
e
x
 
0
"
,
 
"
D
e
l
e
t
e
 
a
t
 
i
n
d
e
x
 
0
"
,
 
"
A
c
c
e
s
s
 
a
[
5
]
"
,
 
"
L
i
n
e
a
r
 
s
e
a
r
c
h
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
A
c
c
e
s
s
 
i
s
 
O
(
1
)
.
 
T
h
e
 
o
t
h
e
r
s
 
r
e
q
u
i
r
e
 
s
h
i
f
t
i
n
g
 
o
r
 
s
c
a
n
n
i
n
g
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
B
i
n
a
r
y
 
s
e
a
r
c
h
 
r
e
q
u
i
r
e
s
 
t
h
e
 
a
r
r
a
y
 
t
o
 
b
e
…
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
N
o
n
-
e
m
p
t
y
"
,
 
"
S
o
r
t
e
d
"
,
 
"
U
n
i
q
u
e
"
,
 
"
N
u
m
e
r
i
c
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
W
i
t
h
o
u
t
 
s
o
r
t
e
d
 
o
r
d
e
r
,
 
'
t
h
e
 
t
a
r
g
e
t
 
i
s
 
l
a
r
g
e
r
,
 
g
o
 
r
i
g
h
t
'
 
i
s
 
m
e
a
n
i
n
g
l
e
s
s
.
 
B
i
n
a
r
y
 
s
e
a
r
c
h
 
r
e
l
i
e
s
 
o
n
 
t
h
e
 
s
o
r
t
e
d
 
i
n
v
a
r
i
a
n
t
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
i
n
s
e
r
t
A
t
(
[
1
,
2
,
3
,
4
,
5
]
,
 
0
,
 
9
)
 
p
e
r
f
o
r
m
s
 
h
o
w
 
m
a
n
y
 
e
l
e
m
e
n
t
 
s
h
i
f
t
s
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
0
"
,
 
"
1
"
,
 
"
4
"
,
 
"
5
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
 
3
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
l
l
 
5
 
e
x
i
s
t
i
n
g
 
e
l
e
m
e
n
t
s
 
m
u
s
t
 
e
a
c
h
 
m
o
v
e
 
o
n
e
 
p
o
s
i
t
i
o
n
 
r
i
g
h
t
 
t
o
 
m
a
k
e
 
s
p
a
c
e
 
a
t
 
i
n
d
e
x
 
0
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
A
r
r
a
y
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
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
4
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
A
r
r
a
y
s
 
a
r
e
 
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
 
n
e
a
r
l
y
 
e
v
e
r
y
 
D
S
A
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
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
S
t
r
i
n
g
s
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


