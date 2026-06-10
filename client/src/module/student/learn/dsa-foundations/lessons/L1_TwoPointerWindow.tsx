
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
t
w
o
-
p
o
i
n
t
e
r
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
 
+
 
l
o
c
a
l
 
A
r
r
a
y
B
a
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
 
B
A
R
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
 
f
i
l
l
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
 
f
i
l
l
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
M
u
t
e
d
 
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
 
f
i
l
l
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
f
f
f
f
f
f
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
 
f
i
l
l
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
f
f
f
f
f
f
"
 
}
,


 
 
s
w
a
p
:
 
 
 
 
 
{
 
f
i
l
l
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
f
f
f
f
f
f
"
 
}
,


 
 
d
o
n
e
:
 
 
 
 
 
{
 
f
i
l
l
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
f
f
f
f
f
f
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
 
f
i
l
l
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
f
f
f
f
f
f
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
 
f
i
l
l
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
f
f
f
f
f
f
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
 
f
i
l
l
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
f
f
f
f
f
f
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
 
f
i
l
l
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
f
f
f
f
f
f
"
 
}
,


 
 
m
i
d
:
 
 
 
 
 
 
{
 
f
i
l
l
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
f
f
f
f
f
f
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
 
A
r
r
a
y
B
a
r
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


 
 
w
i
n
d
o
w
R
a
n
g
e
,


 
 
h
e
i
g
h
t
 
=
 
1
5
0
,


 
 
s
h
o
w
I
n
d
e
x
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
 
n
u
m
b
e
r
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


 
 
w
i
n
d
o
w
R
a
n
g
e
?
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
;


 
 
h
e
i
g
h
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


 
 
s
h
o
w
I
n
d
e
x
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


}
)
 
{


 
 
c
o
n
s
t
 
m
a
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
.
.
.
v
a
l
u
e
s
,
 
1
)
;


 
 
c
o
n
s
t
 
b
a
r
W
 
=
 
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
8
,
 
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
3
4
0
 
/
 
M
a
t
h
.
m
a
x
(
v
a
l
u
e
s
.
l
e
n
g
t
h
,
 
1
)
)
)
;




 
 
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
 
i
t
e
m
s
-
e
n
d
 
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
 
b
a
r
W
 
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
 
b
a
r
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
r
e
l
a
t
i
v
e
 
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
e
n
d
 
g
a
p
-
0
.
5
 
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
3
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
 
h
e
i
g
h
t
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
w
i
n
d
o
w
 
h
i
g
h
l
i
g
h
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
w
i
n
d
o
w
R
a
n
g
e
 
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
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
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
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
:
 
w
i
n
d
o
w
R
a
n
g
e
[
0
]
 
*
 
(
b
a
r
W
 
+
 
2
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
(
w
i
n
d
o
w
R
a
n
g
e
[
1
]
 
-
 
w
i
n
d
o
w
R
a
n
g
e
[
0
]
 
+
 
1
)
 
*
 
(
b
a
r
W
 
+
 
2
)
 
-
 
2
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
"
1
0
0
%
"
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
 
"
#
8
b
5
c
f
6
2
0
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
8
b
5
c
f
6
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
E
v
e
n
t
s
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


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
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
 
B
A
R
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
 
B
A
R
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


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
a
r
H
 
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
4
,
 
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
v
 
/
 
m
a
x
)
 
*
 
(
h
e
i
g
h
t
 
-
 
2
0
)
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
r
e
l
a
t
i
v
e
 
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
e
n
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
 
b
a
r
W
,
 
h
e
i
g
h
t
:
 
"
1
0
0
%
"
 
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
t
 
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
c
e
n
t
e
r
 
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
b
a
r
H
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
f
i
l
l
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
H
e
i
g
h
t
:
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
r
W
 
>
=
 
2
8
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
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
 
i
n
d
e
x
 
r
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
I
n
d
e
x
 
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
 
b
a
r
W
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
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


 
 
 
 
 
 
 
 
{
/
*
 
v
a
l
u
e
 
r
o
w
 
w
h
e
n
 
b
a
r
s
 
t
o
o
 
n
a
r
r
o
w
 
*
/
}


 
 
 
 
 
 
 
 
{
b
a
r
W
 
<
 
2
8
 
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
v
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
 
b
a
r
W
 
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
 
 
L
o
c
a
l
 
M
e
t
r
i
c
 
c
a
r
d
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
e
t
r
i
c
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
 
t
i
n
t
 
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
;
 
t
i
n
t
:
 
s
t
r
i
n
g
 
}
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
p
x
-
4
 
p
y
-
2
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
 
`
$
{
t
i
n
t
}
1
4
`
,


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
t
i
n
t
}
`
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
 
1
1
0
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
 
m
b
-
1
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
 
t
i
n
t
 
}
}


 
 
 
 
 
 
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
l
g
 
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
 
?
?
 
"
,
"
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
 
n
u
m
b
e
r
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


 
 
w
i
n
d
o
w
R
a
n
g
e
?
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
 
 
T
w
o
 
P
o
i
n
t
e
r
,
 
P
a
i
r
 
s
u
m
 
o
n
 
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
P
A
I
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
 
p
a
i
r
S
u
m
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
 
i
s
 
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
e
f
t
 
←
 
0
,
 
r
i
g
h
t
 
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
e
f
t
 
<
 
r
i
g
h
t
:
"
,


 
 
"
 
 
 
 
s
 
←
 
a
[
l
e
f
t
]
 
+
 
a
[
r
i
g
h
t
]
"
,


 
 
"
 
 
 
 
i
f
 
s
 
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
 
(
l
e
f
t
,
 
r
i
g
h
t
)
"
,


 
 
"
 
 
 
 
i
f
 
s
 
<
 
t
a
r
g
e
t
:
 
l
e
f
t
 
←
 
l
e
f
t
 
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
 
r
i
g
h
t
 
←
 
r
i
g
h
t
 
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
 
(
-
1
,
 
-
1
)
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
P
a
i
r
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
 
a
 
=
 
[
.
.
.
a
r
r
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
F
i
n
d
 
t
w
o
 
i
n
d
i
c
e
s
 
w
h
o
s
e
 
v
a
l
u
e
s
 
a
d
d
 
t
o
 
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
a
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


 
 
l
e
t
 
l
e
f
t
 
=
 
0
,
 
r
i
g
h
t
 
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
 
1
,
 
v
a
r
s
:
 
{
 
l
e
f
t
,
 
r
i
g
h
t
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
l
a
c
e
 
p
o
i
n
t
e
r
s
 
a
t
 
t
h
e
 
e
x
t
r
e
m
e
s
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
 
l
e
f
t
,
 
r
i
g
h
t
 
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
e
f
t
 
<
 
r
i
g
h
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
 
2
,
 
v
a
r
s
:
 
{
 
l
e
f
t
,
 
r
i
g
h
t
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
h
i
l
e
 
l
e
f
t
 
<
 
r
i
g
h
t
,
 
c
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
 
l
e
f
t
,
 
r
i
g
h
t
 
}
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
 
=
 
a
[
l
e
f
t
]
 
+
 
a
[
r
i
g
h
t
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
 
3
,
 
v
a
r
s
:
 
{
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
u
m
:
 
s
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
u
t
e
 
s
u
m
:
 
a
[
$
{
l
e
f
t
}
]
 
+
 
a
[
$
{
r
i
g
h
t
}
]
 
=
 
$
{
a
[
l
e
f
t
]
}
 
+
 
$
{
a
[
r
i
g
h
t
]
}
 
=
 
$
{
s
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
 
l
e
f
t
 
|
|
 
k
 
=
=
=
 
r
i
g
h
t
 
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
 
l
e
f
t
,
 
r
i
g
h
t
 
}
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
s
 
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
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
u
m
:
 
s
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
 
"
y
e
s
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
 
`
M
a
t
c
h
!
 
P
a
i
r
 
f
o
u
n
d
 
a
t
 
i
n
d
i
c
e
s
 
(
$
{
l
e
f
t
}
,
 
$
{
r
i
g
h
t
}
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
 
l
e
f
t
 
|
|
 
k
 
=
=
=
 
r
i
g
h
t
 
?
 
"
m
a
t
c
h
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
e
f
t
,
 
r
i
g
h
t
 
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
 
<
 
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
 
5
,
 
v
a
r
s
:
 
{
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
u
m
:
 
s
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
u
m
 
t
o
o
 
s
m
a
l
l
;
 
i
n
c
r
e
a
s
e
 
i
t
 
b
y
 
m
o
v
i
n
g
 
l
e
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
 
l
e
f
t
 
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
e
f
t
,
 
r
i
g
h
t
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
l
e
f
t
+
+
;


 
 
 
 
}
 
e
l
s
e
 
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
 
6
,
 
v
a
r
s
:
 
{
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
u
m
:
 
s
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
u
m
 
t
o
o
 
b
i
g
;
 
d
e
c
r
e
a
s
e
 
i
t
 
b
y
 
m
o
v
i
n
g
 
r
i
g
h
t
 
l
e
f
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
 
r
i
g
h
t
 
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
e
f
t
,
 
r
i
g
h
t
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
i
g
h
t
-
-
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
 
"
n
o
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
 
`
P
o
i
n
t
e
r
s
 
c
r
o
s
s
e
d
;
 
n
o
 
p
a
i
r
 
s
u
m
s
 
t
o
 
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
 
T
o
t
a
l
 
w
o
r
k
 
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
 
 
S
l
i
d
i
n
g
 
W
i
n
d
o
w
,
 
m
a
x
 
s
u
m
 
o
f
 
k
 
c
o
n
s
e
c
u
t
i
v
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
W
I
N
D
O
W
 
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
 
m
a
x
S
u
m
K
(
a
,
 
k
)
:
"
,


 
 
"
 
 
w
i
n
d
o
w
 
←
 
s
u
m
 
o
f
 
a
[
0
.
.
k
-
1
]
"
,


 
 
"
 
 
b
e
s
t
 
←
 
w
i
n
d
o
w
"
,


 
 
"
 
 
f
o
r
 
r
i
g
h
t
 
i
n
 
k
.
.
n
-
1
:
"
,


 
 
"
 
 
 
 
w
i
n
d
o
w
 
←
 
w
i
n
d
o
w
 
+
 
a
[
r
i
g
h
t
]
 
-
 
a
[
r
i
g
h
t
 
-
 
k
]
"
,


 
 
"
 
 
 
 
b
e
s
t
 
←
 
m
a
x
(
b
e
s
t
,
 
w
i
n
d
o
w
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
 
b
e
s
t
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
W
i
n
d
o
w
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
 
k
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


 
 
i
f
 
(
k
 
<
=
 
0
 
|
|
 
k
 
>
 
n
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
 
k
 
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
k
 
m
u
s
t
 
s
a
t
i
s
f
y
 
1
 
≤
 
k
 
≤
 
n
.
 
A
d
j
u
s
t
 
t
h
e
 
i
n
p
u
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


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}


 
 
l
e
t
 
w
i
n
d
o
w
 
=
 
0
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
 
k
;
 
i
+
+
)
 
w
i
n
d
o
w
 
+
=
 
a
[
i
]
;


 
 
l
e
t
 
b
e
s
t
 
=
 
w
i
n
d
o
w
;


 
 
l
e
t
 
b
e
s
t
L
o
 
=
 
0
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
 
n
,
 
k
,
 
w
i
n
d
o
w
 
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
e
d
 
t
h
e
 
f
i
r
s
t
 
w
i
n
d
o
w
 
[
0
.
.
$
{
k
 
-
 
1
}
]
 
w
i
t
h
 
s
u
m
 
$
{
w
i
n
d
o
w
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
 
i
d
x
)
 
=
>
 
(
i
d
x
 
<
 
k
 
?
 
"
w
i
n
d
o
w
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
e
f
t
:
 
0
,
 
r
i
g
h
t
:
 
k
 
-
 
1
 
}
,


 
 
 
 
w
i
n
d
o
w
R
a
n
g
e
:
 
[
0
,
 
k
 
-
 
1
]
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
 
w
i
n
d
o
w
,
 
b
e
s
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
R
e
c
o
r
d
 
t
h
i
s
 
a
s
 
t
h
e
 
b
e
s
t
 
s
u
m
 
s
o
 
f
a
r
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
 
i
d
x
)
 
=
>
 
(
i
d
x
 
<
 
k
 
?
 
"
w
i
n
d
o
w
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
e
f
t
:
 
0
,
 
r
i
g
h
t
:
 
k
 
-
 
1
 
}
,


 
 
 
 
w
i
n
d
o
w
R
a
n
g
e
:
 
[
0
,
 
k
 
-
 
1
]
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
 
r
i
g
h
t
 
=
 
k
;
 
r
i
g
h
t
 
<
 
n
;
 
r
i
g
h
t
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
l
e
f
t
 
=
 
r
i
g
h
t
 
-
 
k
 
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
 
3
,
 
v
a
r
s
:
 
{
 
r
i
g
h
t
,
 
l
e
f
t
,
 
w
i
n
d
o
w
,
 
b
e
s
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
l
i
d
e
:
 
n
e
w
 
r
i
g
h
t
 
=
 
$
{
r
i
g
h
t
}
;
 
n
e
w
 
l
e
f
t
 
=
 
$
{
l
e
f
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
_
,
 
i
d
x
)
 
=
>
 
(
i
d
x
 
>
=
 
l
e
f
t
 
&
&
 
i
d
x
 
<
=
 
r
i
g
h
t
 
?
 
"
w
i
n
d
o
w
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
e
f
t
,
 
r
i
g
h
t
,
 
i
n
:
 
r
i
g
h
t
,
 
o
u
t
:
 
l
e
f
t
 
-
 
1
 
}
,


 
 
 
 
 
 
w
i
n
d
o
w
R
a
n
g
e
:
 
[
l
e
f
t
,
 
r
i
g
h
t
]
,


 
 
 
 
}
)
;


 
 
 
 
w
i
n
d
o
w
 
=
 
w
i
n
d
o
w
 
+
 
a
[
r
i
g
h
t
]
 
-
 
a
[
r
i
g
h
t
 
-
 
k
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
 
4
,
 
v
a
r
s
:
 
{
 
r
i
g
h
t
,
 
l
e
f
t
,
 
w
i
n
d
o
w
,
 
b
e
s
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
 
i
n
 
O
(
1
)
:
 
w
i
n
d
o
w
 
←
 
w
i
n
d
o
w
 
+
 
$
{
a
[
r
i
g
h
t
]
}
 
−
 
$
{
a
[
r
i
g
h
t
 
-
 
k
]
}
 
=
 
$
{
w
i
n
d
o
w
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
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
i
d
x
 
=
=
=
 
r
i
g
h
t
)
 
r
e
t
u
r
n
 
"
a
c
t
i
v
e
"
;


 
 
 
 
 
 
 
 
i
f
 
(
i
d
x
 
=
=
=
 
r
i
g
h
t
 
-
 
k
)
 
r
e
t
u
r
n
 
"
v
i
s
i
t
e
d
"
;


 
 
 
 
 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
l
e
f
t
 
&
&
 
i
d
x
 
<
=
 
r
i
g
h
t
)
 
r
e
t
u
r
n
 
"
w
i
n
d
o
w
"
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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


 
 
 
 
 
 
}
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
e
f
t
,
 
r
i
g
h
t
,
 
i
n
:
 
r
i
g
h
t
,
 
o
u
t
:
 
r
i
g
h
t
 
-
 
k
 
}
,


 
 
 
 
 
 
w
i
n
d
o
w
R
a
n
g
e
:
 
[
l
e
f
t
,
 
r
i
g
h
t
]
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
w
i
n
d
o
w
 
>
 
b
e
s
t
)
 
{


 
 
 
 
 
 
b
e
s
t
 
=
 
w
i
n
d
o
w
;


 
 
 
 
 
 
b
e
s
t
L
o
 
=
 
l
e
f
t
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
 
r
i
g
h
t
,
 
l
e
f
t
,
 
w
i
n
d
o
w
,
 
b
e
s
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
N
e
w
 
b
e
s
t
:
 
$
{
b
e
s
t
}
 
(
w
i
n
d
o
w
 
s
t
a
r
t
s
 
a
t
 
$
{
b
e
s
t
L
o
}
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
_
,
 
i
d
x
)
 
=
>
 
(
i
d
x
 
>
=
 
l
e
f
t
 
&
&
 
i
d
x
 
<
=
 
r
i
g
h
t
 
?
 
"
m
a
t
c
h
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
e
f
t
,
 
r
i
g
h
t
 
}
,


 
 
 
 
 
 
 
 
w
i
n
d
o
w
R
a
n
g
e
:
 
[
l
e
f
t
,
 
r
i
g
h
t
]
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
 
r
i
g
h
t
,
 
l
e
f
t
,
 
w
i
n
d
o
w
,
 
b
e
s
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
e
s
t
 
u
n
c
h
a
n
g
e
d
 
a
t
 
$
{
b
e
s
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
_
,
 
i
d
x
)
 
=
>
 
(
i
d
x
 
>
=
 
l
e
f
t
 
&
&
 
i
d
x
 
<
=
 
r
i
g
h
t
 
?
 
"
w
i
n
d
o
w
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
e
f
t
,
 
r
i
g
h
t
 
}
,


 
 
 
 
 
 
 
 
w
i
n
d
o
w
R
a
n
g
e
:
 
[
l
e
f
t
,
 
r
i
g
h
t
]
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
 
6
,
 
v
a
r
s
:
 
{
 
b
e
s
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
D
o
n
e
.
 
M
a
x
i
m
u
m
 
s
u
m
 
o
f
 
a
n
y
 
$
{
k
}
-
w
i
n
d
o
w
 
i
s
 
$
{
b
e
s
t
}
.
 
T
o
t
a
l
 
t
i
m
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
_
,
 
i
d
x
)
 
=
>
 
(
i
d
x
 
>
=
 
b
e
s
t
L
o
 
&
&
 
i
d
x
 
<
 
b
e
s
t
L
o
 
+
 
k
 
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
 
l
e
f
t
:
 
b
e
s
t
L
o
,
 
r
i
g
h
t
:
 
b
e
s
t
L
o
 
+
 
k
 
-
 
1
 
}
,


 
 
 
 
w
i
n
d
o
w
R
a
n
g
e
:
 
[
b
e
s
t
L
o
,
 
b
e
s
t
L
o
 
+
 
k
 
-
 
1
]
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
 
M
o
d
e
 
=
 
"
p
a
i
r
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
m
o
d
e
,
 
s
e
t
M
o
d
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
M
o
d
e
>
(
"
p
a
i
r
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
2
,
 
4
,
 
7
,
 
1
,
 
8
,
 
3
,
 
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
9
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
a
m
S
t
r
)
;


 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
p
a
i
r
"
)
 
{


 
 
 
 
 
 
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
P
A
I
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
P
a
i
r
(
a
r
r
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
)
 
?
 
p
 
:
 
0
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
E
n
t
e
r
 
t
h
e
 
t
a
r
g
e
t
 
s
u
m
 
(
e
.
g
.
 
9
)
"
 
}
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
k
 
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
)
 
:
 
1
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
W
I
N
D
O
W
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
W
i
n
d
o
w
(
a
r
r
,
 
k
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
E
n
t
e
r
 
w
i
n
d
o
w
 
s
i
z
e
 
k
 
(
e
.
g
.
 
3
)
"
 
}
;


 
 
}
,
 
[
m
o
d
e
,
 
a
r
r
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
 
m
o
d
e
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
M
o
d
e
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


 
 
 
 
p
a
i
r
:
 
"
T
w
o
 
P
o
i
n
t
e
r
,
 
P
a
i
r
 
S
u
m
 
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


 
 
 
 
w
i
n
d
o
w
:
 
"
S
l
i
d
i
n
g
 
W
i
n
d
o
w
,
 
M
a
x
 
S
u
m
 
o
f
 
k
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
m
o
d
e
L
a
b
e
l
s
[
m
o
d
e
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
 
2
,
 
4
,
 
7
,
 
1
,
 
8
,
 
3
,
 
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
1
,
 
3
,
 
5
,
 
7
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
M
i
x
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
 
4
,
 
7
,
 
1
,
 
8
,
 
3
,
 
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
N
e
g
a
t
i
v
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
-
4
,
 
2
,
 
-
1
,
 
5
,
 
3
,
 
-
2
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
 
p
e
a
k
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
 
2
,
 
3
,
 
1
0
,
 
2
,
 
1
,
 
1
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
 
6
 
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
 
r
n
d
 
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
 
1
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
r
n
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
{
m
o
d
e
 
=
=
=
 
"
p
a
i
r
"
 
?
 
"
T
a
r
g
e
t
 
s
u
m
"
 
:
 
"
W
i
n
d
o
w
 
s
i
z
e
 
k
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
o
d
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
m
o
d
e
L
a
b
e
l
s
)
 
a
s
 
M
o
d
e
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
M
o
d
e
(
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
d
 
=
=
=
 
"
p
a
i
r
"
 
?
 
"
9
"
 
:
 
"
3
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
m
o
d
e
 
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
m
o
d
e
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
w
i
n
d
o
w
"
,
 
"
b
e
s
t
"
,
 
"
s
u
m
"
,
 
"
l
e
f
t
"
,
 
"
r
i
g
h
t
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
A
r
r
a
y
B
a
r
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


 
 
 
 
 
 
 
 
 
 
w
i
n
d
o
w
R
a
n
g
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
w
i
n
d
o
w
R
a
n
g
e
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
1
5
0
}


 
 
 
 
 
 
 
 
 
 
s
h
o
w
I
n
d
e
x


 
 
 
 
 
 
 
 
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
4
 
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
"
>


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
w
i
n
d
o
w
"
 
&
&
 
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
.
w
i
n
d
o
w
 
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
M
e
t
r
i
c
 
l
a
b
e
l
=
"
C
u
r
r
e
n
t
 
w
i
n
d
o
w
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
.
v
a
r
s
.
w
i
n
d
o
w
}
 
t
i
n
t
=
"
#
8
B
5
C
F
6
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
w
i
n
d
o
w
"
 
&
&
 
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
.
b
e
s
t
 
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
M
e
t
r
i
c
 
l
a
b
e
l
=
"
B
e
s
t
 
s
e
e
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
.
v
a
r
s
.
b
e
s
t
}
 
t
i
n
t
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


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
p
a
i
r
"
 
&
&
 
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
.
s
u
m
 
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
M
e
t
r
i
c
 
l
a
b
e
l
=
"
C
u
r
r
e
n
t
 
s
u
m
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
.
v
a
r
s
.
s
u
m
}
 
t
i
n
t
=
"
#
3
B
8
2
F
6
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
p
a
i
r
"
 
&
&
 
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
.
t
a
r
g
e
t
 
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
M
e
t
r
i
c
 
l
a
b
e
l
=
"
T
a
r
g
e
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
.
v
a
r
s
.
t
a
r
g
e
t
}
 
t
i
n
t
=
"
#
F
5
9
E
0
B
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
t
w
o
 
p
a
t
t
e
r
n
s
,
 
o
n
e
 
i
d
e
a
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
A
v
o
i
d
 
t
h
e
 
n
e
s
t
e
d
 
l
o
o
p
.
 
M
a
i
n
t
a
i
n
 
a
n
 
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


 
 
 
 
 
 
 
 
 
 
T
h
e
 
b
r
u
t
e
 
f
o
r
c
e
 
f
o
r
 
m
a
n
y
 
a
r
r
a
y
 
p
r
o
b
l
e
m
s
 
i
s
 
a
 
d
o
u
b
l
e
 
l
o
o
p
,
 
O
(
n
²
)
.
 
B
o
t
h
 
t
w
o
-
p
o
i
n
t
e
r
 
a
n
d


 
 
 
 
 
 
 
 
 
 
s
l
i
d
i
n
g
-
w
i
n
d
o
w
 
t
u
r
n
 
t
h
o
s
e
 
i
n
t
o
 
a
 
s
i
n
g
l
e
 
l
i
n
e
a
r
 
s
w
e
e
p
 
b
y
 
k
e
e
p
i
n
g
 
u
s
e
f
u
l
 
i
n
f
o
r
m
a
t
i
o
n
 
a
s


 
 
 
 
 
 
 
 
 
 
y
o
u
 
m
o
v
e
.
 
T
h
e
 
t
r
i
c
k
 
i
s
 
t
h
e
 
<
e
m
>
i
n
v
a
r
i
a
n
t
<
/
e
m
>
:
 
a
 
g
u
a
r
a
n
t
e
e
 
t
h
a
t
 
s
t
a
y
s
 
t
r
u
e
 
e
a
c
h
 
s
t
e
p


 
 
 
 
 
 
 
 
 
 
a
n
d
 
p
r
u
n
e
s
 
t
h
e
 
s
e
a
r
c
h
 
s
p
a
c
e
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
T
w
o
-
P
o
i
n
t
e
r
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


 
 
 
 
 
 
 
 
 
 
T
w
o
 
i
n
d
i
c
e
s
 
s
t
a
r
t
 
a
t
 
d
i
f
f
e
r
e
n
t
 
p
o
s
i
t
i
o
n
s
 
(
u
s
u
a
l
l
y
 
t
h
e
 
e
n
d
s
 
o
f
 
a
 
<
e
m
>
s
o
r
t
e
d
<
/
e
m
>
 
a
r
r
a
y
)


 
 
 
 
 
 
 
 
 
 
a
n
d
 
m
o
v
e
 
t
o
w
a
r
d
 
e
a
c
h
 
o
t
h
e
r
.
 
I
n
v
a
r
i
a
n
t
 
f
o
r
 
p
a
i
r
-
s
u
m
:
 
e
v
e
r
y
 
p
a
i
r
 
i
n
v
o
l
v
i
n
g
 
a
 
d
r
o
p
p
e
d


 
 
 
 
 
 
 
 
 
 
e
l
e
m
e
n
t
 
h
a
s
 
a
l
r
e
a
d
y
 
b
e
e
n
 
e
l
i
m
i
n
a
t
e
d
.
 
W
o
r
k
s
 
f
o
r
 
3
S
u
m
,
 
c
o
n
t
a
i
n
e
r
-
w
i
t
h
-
m
o
s
t
-
w
a
t
e
r
,
 
m
e
r
g
i
n
g


 
 
 
 
 
 
 
 
 
 
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
l
i
d
i
n
g
 
W
i
n
d
o
w
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


 
 
 
 
 
 
 
 
 
 
A
 
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
 
s
u
b
-
r
a
n
g
e
 
[
l
e
f
t
.
.
r
i
g
h
t
]
 
m
o
v
e
s
 
a
c
r
o
s
s
 
t
h
e
 
a
r
r
a
y
,
 
a
d
d
i
n
g
 
t
h
e
 
e
n
t
e
r
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


 
 
 
 
 
 
 
 
 
 
a
n
d
 
r
e
m
o
v
i
n
g
 
t
h
e
 
l
e
a
v
i
n
g
 
o
n
e
,
 
e
a
c
h
 
u
p
d
a
t
e
 
i
s
 
O
(
1
)
.
 
F
i
x
e
d
-
s
i
z
e
 
w
i
n
d
o
w
s
 
a
r
e
 
e
a
s
y
;


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
b
l
e
-
s
i
z
e
 
o
n
e
s
 
e
x
p
a
n
d
 
w
h
e
n
 
a
 
c
o
n
d
i
t
i
o
n
 
h
o
l
d
s
 
a
n
d
 
s
h
r
i
n
k
 
w
h
e
n
 
i
t
 
b
r
e
a
k
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
P
r
o
b
l
e
m
"
,
 
"
P
a
t
t
e
r
n
"
,
 
"
T
i
m
e
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
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
P
a
i
r
 
w
i
t
h
 
s
u
m
 
=
 
t
a
r
g
e
t
 
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
T
w
o
 
p
o
i
n
t
e
r
s
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
R
e
v
e
r
s
e
 
a
 
s
t
r
i
n
g
 
i
n
 
p
l
a
c
e
"
,
 
"
T
w
o
 
p
o
i
n
t
e
r
s
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
M
a
x
 
s
u
m
 
o
f
 
k
 
c
o
n
s
e
c
u
t
i
v
e
 
v
a
l
u
e
s
"
,
 
"
F
i
x
e
d
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
L
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
w
i
t
h
 
u
n
i
q
u
e
 
c
h
a
r
s
"
,
 
"
V
a
r
i
a
b
l
e
 
w
i
n
d
o
w
 
+
 
s
e
t
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
S
m
a
l
l
e
s
t
 
s
u
b
a
r
r
a
y
 
s
u
m
 
≥
 
S
"
,
 
"
V
a
r
i
a
b
l
e
 
w
i
n
d
o
w
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
]
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
S
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
 
[
1
,
3
,
5
,
7
,
9
]
,
 
t
a
r
g
e
t
 
=
 
1
0
,
 
w
h
i
c
h
 
p
a
i
r
 
o
f
 
v
a
l
u
e
s
 
s
u
m
s
 
t
o
 
1
0
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
 
+
 
8
"
,
 
"
3
 
+
 
7
"
,
 
"
2
 
+
 
8
"
,
 
"
4
 
+
 
5
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
3
 
a
n
d
 
7
 
a
r
e
 
b
o
t
h
 
i
n
 
t
h
e
 
a
r
r
a
y
;
 
t
h
e
i
r
 
s
u
m
 
i
s
 
1
0
.
 
T
w
o
-
p
o
i
n
t
e
r
 
f
i
n
d
s
 
t
h
e
m
 
i
m
m
e
d
i
a
t
e
l
y
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
:
 
"
S
l
i
d
i
n
g
 
a
 
w
i
n
d
o
w
 
o
f
 
s
i
z
e
 
k
 
=
 
3
 
o
v
e
r
 
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
 
p
r
o
d
u
c
e
s
 
h
o
w
 
m
a
n
y
 
w
i
n
d
o
w
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
3
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
W
i
n
d
o
w
s
 
s
t
a
r
t
 
a
t
 
i
n
d
i
c
e
s
 
0
,
 
1
,
 
2
 
→
 
3
 
w
i
n
d
o
w
s
.
 
n
 
−
 
k
 
+
 
1
 
=
 
5
 
−
 
3
 
+
 
1
 
=
 
3
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
:
 
"
W
h
e
n
 
y
o
u
 
s
l
i
d
e
 
a
 
w
i
n
d
o
w
 
o
f
 
s
i
z
e
 
k
 
b
y
 
o
n
e
 
s
t
e
p
,
 
h
o
w
 
m
a
n
y
 
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
p
e
r
a
t
i
o
n
s
 
u
p
d
a
t
e
 
t
h
e
 
s
u
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
O
(
1
)
:
 
o
n
e
 
a
d
d
,
 
o
n
e
 
s
u
b
t
r
a
c
t
"
,
 
"
O
(
k
)
"
,
 
"
O
(
n
)
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
R
e
m
o
v
e
 
t
h
e
 
l
e
a
v
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
,
 
a
d
d
 
t
h
e
 
e
n
t
e
r
i
n
g
 
o
n
e
,
 
t
w
o
 
o
p
e
r
a
t
i
o
n
s
,
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
k
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
:
 
"
T
w
o
-
p
o
i
n
t
e
r
 
p
a
i
r
-
s
u
m
 
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
A
l
l
 
p
o
s
i
t
i
v
e
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
s
u
m
 
t
o
o
 
s
m
a
l
l
 
=
>
 
m
o
v
e
 
l
e
f
t
 
r
i
g
h
t
'
 
i
s
 
n
o
t
 
j
u
s
t
i
f
i
e
d
.
"
,


 
 
 
 
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
W
h
y
 
t
h
e
 
s
u
m
 
u
p
d
a
t
e
 
i
s
 
O
(
1
)
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


 
 
 
 
 
 
 
 
 
 
A
 
n
a
i
v
e
 
s
o
l
u
t
i
o
n
 
r
e
c
o
m
p
u
t
e
s
 
t
h
e
 
s
u
m
 
o
f
 
e
v
e
r
y
 
k
-
w
i
n
d
o
w
 
f
r
o
m
 
s
c
r
a
t
c
h
:
 
O
(
n
 
·
 
k
)
.
 
T
h
e


 
 
 
 
 
 
 
 
 
 
s
l
i
d
i
n
g
-
w
i
n
d
o
w
 
i
n
s
i
g
h
t
 
i
s
 
t
h
a
t
 
a
d
j
a
c
e
n
t
 
w
i
n
d
o
w
s
 
s
h
a
r
e
 
k
 
−
 
1
 
e
l
e
m
e
n
t
s
,
 
s
o
 
m
a
i
n
t
a
i
n
i
n
g
 
a


 
 
 
 
 
 
 
 
 
 
r
u
n
n
i
n
g
 
t
o
t
a
l
 
c
o
s
t
s
 
o
n
e
 
a
d
d
 
+
 
o
n
e
 
s
u
b
t
r
a
c
t
 
p
e
r
 
s
t
e
p
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
A
m
o
r
t
i
s
e
d
 
a
n
a
l
y
s
i
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


 
 
 
 
 
 
 
 
 
 
I
n
 
a
 
v
a
r
i
a
b
l
e
-
s
i
z
e
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
,
 
e
a
c
h
 
i
n
d
e
x
 
e
n
t
e
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
 
a
t
 
m
o
s
t
 
o
n
c
e
.
 
T
o
t
a
l


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
 
m
o
v
e
s
 
a
r
e
 
a
t
 
m
o
s
t
 
2
n
 
→
 
O
(
n
)
 
e
v
e
n
 
t
h
o
u
g
h
 
a
n
 
i
n
d
i
v
i
d
u
a
l
 
s
t
e
p
 
c
a
n
 
s
h
r
i
n
k
 
t
h
e
 
w
i
n
d
o
w


 
 
 
 
 
 
 
 
 
 
b
y
 
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
I
n
t
e
r
v
i
e
w
 
c
u
e
 
w
o
r
d
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
"
S
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
,
 
f
i
n
d
 
t
w
o
 
n
u
m
b
e
r
s
…
"
 
→
 
t
w
o
 
p
o
i
n
t
e
r
s
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
"
S
u
b
a
r
r
a
y
 
o
f
 
l
e
n
g
t
h
 
k
"
 
o
r
 
"
c
o
n
s
e
c
u
t
i
v
e
…
"
 
→
 
f
i
x
e
d
 
w
i
n
d
o
w
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
"
L
o
n
g
e
s
t
 
/
 
s
m
a
l
l
e
s
t
 
s
u
b
a
r
r
a
y
 
s
a
t
i
s
f
y
i
n
g
 
a
 
c
o
n
d
i
t
i
o
n
"
 
→
 
v
a
r
i
a
b
l
e
 
w
i
n
d
o
w
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
"
C
o
n
t
i
g
u
o
u
s
"
 
i
s
 
t
h
e
 
s
i
g
n
a
l
 
w
o
r
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
T
w
o
P
o
i
n
t
e
r
W
i
n
d
o
w
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
T
w
o
-
p
o
i
n
t
e
r
 
p
a
i
r
-
s
u
m
 
o
n
 
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
 
r
u
n
s
 
i
n
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
O
(
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
n
²
)
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
E
a
c
h
 
s
t
e
p
 
m
o
v
e
s
 
o
n
e
 
p
o
i
n
t
e
r
,
 
a
n
d
 
p
o
i
n
t
e
r
s
 
c
r
o
s
s
 
a
f
t
e
r
 
a
t
 
m
o
s
t
 
n
 
m
o
v
e
s
.
 
O
(
n
)
 
p
l
u
s
 
t
h
e
 
O
(
n
 
l
o
g
 
n
)
 
s
o
r
t
 
c
o
s
t
 
i
f
 
u
n
s
o
r
t
e
d
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
G
i
v
e
n
 
[
1
,
 
3
,
 
6
,
 
8
,
 
1
0
]
 
a
n
d
 
t
a
r
g
e
t
 
=
 
1
1
,
 
t
h
e
 
t
w
o
-
p
o
i
n
t
e
r
 
a
l
g
o
r
i
t
h
m
 
r
e
t
u
r
n
s
 
w
h
i
c
h
 
p
a
i
r
 
o
f
 
v
a
l
u
e
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
(
1
,
 
1
0
)
"
,
 
"
(
3
,
 
8
)
"
,
 
"
(
6
,
 
8
)
"
,
 
"
N
o
 
p
a
i
r
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
 
0
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
l
e
f
t
 
=
 
0
,
 
r
i
g
h
t
 
=
 
4
 
→
 
1
 
+
 
1
0
 
=
 
1
1
 
→
 
m
a
t
c
h
.
 
B
o
t
h
 
(
1
,
 
1
0
)
 
a
n
d
 
(
3
,
 
8
)
 
s
u
m
 
t
o
 
1
1
;
 
t
h
e
 
a
l
g
o
r
i
t
h
m
 
f
i
n
d
s
 
(
1
,
 
1
0
)
 
f
i
r
s
t
 
b
e
c
a
u
s
e
 
i
t
 
s
t
a
r
t
s
 
a
t
 
t
h
e
 
e
n
d
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
e
n
 
y
o
u
 
e
x
t
e
n
d
 
a
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
b
y
 
o
n
e
 
e
l
e
m
e
n
t
 
t
o
 
t
h
e
 
r
i
g
h
t
,
 
y
o
u
 
m
u
s
t
 
a
l
w
a
y
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
R
e
c
o
m
p
u
t
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
 
f
r
o
m
 
s
c
r
a
t
c
h
"
,


 
 
 
 
 
 
 
 
"
A
d
d
 
t
h
e
 
e
n
t
e
r
i
n
g
 
v
a
l
u
e
 
a
n
d
 
(
f
o
r
 
f
i
x
e
d
 
s
i
z
e
)
 
s
u
b
t
r
a
c
t
 
t
h
e
 
l
e
a
v
i
n
g
 
v
a
l
u
e
"
,


 
 
 
 
 
 
 
 
"
R
e
-
s
o
r
t
 
t
h
e
 
a
r
r
a
y
"
,


 
 
 
 
 
 
 
 
"
S
h
r
i
n
k
 
t
h
e
 
w
i
n
d
o
w
 
b
y
 
o
n
e
 
f
r
o
m
 
t
h
e
 
l
e
f
t
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
T
h
e
 
w
h
o
l
e
 
p
o
i
n
t
 
o
f
 
t
h
e
 
p
a
t
t
e
r
n
 
i
s
 
t
h
e
 
O
(
1
)
 
u
p
d
a
t
e
:
 
a
d
d
 
i
n
c
o
m
i
n
g
,
 
s
u
b
t
r
a
c
t
 
o
u
t
g
o
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
W
h
i
c
h
 
o
f
 
t
h
e
 
f
o
l
l
o
w
i
n
g
 
i
s
 
t
h
e
 
b
i
g
g
e
s
t
 
r
e
a
s
o
n
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
b
e
a
t
s
 
t
h
e
 
O
(
n
 
·
 
k
)
 
b
r
u
t
e
 
f
o
r
c
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
t
 
u
s
e
s
 
l
e
s
s
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
C
o
n
s
e
c
u
t
i
v
e
 
w
i
n
d
o
w
s
 
s
h
a
r
e
 
k
 
−
 
1
 
e
l
e
m
e
n
t
s
,
 
s
o
 
w
e
 
r
e
u
s
e
 
p
r
i
o
r
 
w
o
r
k
"
,


 
 
 
 
 
 
 
 
"
I
t
 
a
v
o
i
d
s
 
r
e
c
u
r
s
i
o
n
"
,


 
 
 
 
 
 
 
 
"
I
t
 
w
o
r
k
s
 
o
n
l
y
 
o
n
 
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
S
h
a
r
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
 
b
e
t
w
e
e
n
 
a
d
j
a
c
e
n
t
 
w
i
n
d
o
w
s
 
i
s
 
t
h
e
 
w
h
o
l
e
 
i
n
s
i
g
h
t
,
 
y
o
u
 
u
p
d
a
t
e
 
i
n
 
O
(
1
)
 
i
n
s
t
e
a
d
 
o
f
 
r
e
c
o
m
p
u
t
i
n
g
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
T
w
o
-
P
o
i
n
t
e
r
 
&
 
S
l
i
d
i
n
g
 
W
i
n
d
o
w
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
6
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
P
a
t
t
e
r
n
 
s
h
o
w
s
 
u
p
 
i
n
 
3
0
–
4
0
%
 
o
f
 
e
a
s
y
/
m
e
d
i
u
m
 
a
r
r
a
y
 
p
r
o
b
l
e
m
s
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
a
c
k
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


