
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
S
t
a
t
e
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
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
 
B
o
o
k
O
p
e
n
,
 
G
l
o
b
e
,
 
M
e
g
a
p
h
o
n
e
,
 
R
o
t
a
t
e
C
c
w
,
 
S
e
n
d
 
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
 
E
n
g
i
n
e
e
r
i
n
g
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
T
h
e
 
4
-
s
t
e
p
 
f
r
a
m
e
w
o
r
k
 
a
p
p
l
i
e
d
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
S
T
E
P
S
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
1
.
 
R
e
q
u
i
r
e
m
e
n
t
s
"
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
F
u
n
c
t
i
o
n
a
l
:
 
p
o
s
t
 
t
w
e
e
t
,
 
f
o
l
l
o
w
,
 
v
i
e
w
 
h
o
m
e
 
t
i
m
e
l
i
n
e
 
(
c
h
r
o
n
o
l
o
g
i
c
a
l
 
m
e
r
g
e
 
o
f
 
f
o
l
l
o
w
e
e
s
'
 
t
w
e
e
t
s
)
.
"
,


 
 
 
 
 
 
"
N
o
n
-
f
u
n
c
t
i
o
n
a
l
:
 
t
i
m
e
l
i
n
e
 
r
e
a
d
 
p
9
9
 
<
 
2
0
0
m
s
,
 
9
5
%
+
 
a
v
a
i
l
a
b
i
l
i
t
y
,
 
c
a
n
 
s
u
r
v
i
v
e
 
v
i
r
a
l
 
/
 
c
e
l
e
b
r
i
t
y
 
p
o
s
t
s
.
"
,


 
 
 
 
 
 
"
O
u
t
 
o
f
 
s
c
o
p
e
 
(
i
n
t
e
r
v
i
e
w
-
v
e
r
s
i
o
n
)
:
 
r
a
n
k
i
n
g
,
 
a
d
s
,
 
s
e
a
r
c
h
,
 
D
M
s
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
2
.
 
E
s
t
i
m
a
t
i
o
n
"
,


 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
5
0
0
M
 
t
w
e
e
t
s
/
d
a
y
 
→
 
~
6
k
 
w
r
i
t
e
s
/
s
e
c
 
a
v
e
r
a
g
e
,
 
p
e
a
k
 
~
3
0
k
.
"
,


 
 
 
 
 
 
"
2
0
0
M
 
d
a
i
l
y
 
a
c
t
i
v
e
 
u
s
e
r
s
 
×
 
5
0
 
t
i
m
e
l
i
n
e
 
o
p
e
n
s
/
d
a
y
 
→
 
~
1
1
5
k
 
t
i
m
e
l
i
n
e
 
r
e
a
d
s
/
s
e
c
.
"
,


 
 
 
 
 
 
"
A
v
g
 
f
o
l
l
o
w
e
r
 
c
o
u
n
t
:
 
~
2
0
0
.
 
T
o
p
 
0
.
1
%
 
h
a
v
e
 
1
M
+
 
(
t
h
e
 
c
e
l
e
b
r
i
t
y
 
t
a
i
l
)
.
"
,


 
 
 
 
 
 
"
T
w
e
e
t
 
~
2
8
0
 
c
h
a
r
s
 
+
 
m
e
t
a
d
a
t
a
 
~
1
 
K
B
.
 
S
t
o
r
a
g
e
:
 
5
0
0
M
 
×
 
3
6
5
 
×
 
5
y
 
×
 
1
K
B
 
≈
 
9
0
0
 
T
B
 
/
 
5
 
y
r
s
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
3
.
 
A
P
I
 
+
 
D
a
t
a
 
M
o
d
e
l
"
,


 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
P
O
S
T
 
/
t
w
e
e
t
s
 
{
 
t
e
x
t
 
}
 
·
 
G
E
T
 
/
t
i
m
e
l
i
n
e
 
→
 
l
i
s
t
 
o
f
 
t
w
e
e
t
s
 
·
 
P
O
S
T
 
/
f
o
l
l
o
w
 
{
 
u
s
e
r
_
i
d
 
}
"
,


 
 
 
 
 
 
"
t
w
e
e
t
s
(
i
d
,
 
a
u
t
h
o
r
_
i
d
,
 
t
e
x
t
,
 
c
r
e
a
t
e
d
_
a
t
)
 
—
 
s
h
a
r
d
e
d
 
b
y
 
a
u
t
h
o
r
_
i
d
"
,


 
 
 
 
 
 
"
f
o
l
l
o
w
s
(
f
o
l
l
o
w
e
r
_
i
d
,
 
f
o
l
l
o
w
e
e
_
i
d
)
 
—
 
b
i
d
i
r
e
c
t
i
o
n
a
l
 
i
n
d
e
x
e
s
"
,


 
 
 
 
 
 
"
t
i
m
e
l
i
n
e
_
c
a
c
h
e
(
u
s
e
r
_
i
d
,
 
l
i
s
t
 
o
f
 
t
w
e
e
t
_
i
d
s
)
 
i
n
 
R
e
d
i
s
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
4
.
 
H
i
g
h
-
l
e
v
e
l
 
D
i
a
g
r
a
m
"
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
W
r
i
t
e
 
p
a
t
h
:
 
c
l
i
e
n
t
 
→
 
w
r
i
t
e
 
A
P
I
 
→
 
t
w
e
e
t
 
s
t
o
r
e
 
→
 
f
a
n
-
o
u
t
 
s
e
r
v
i
c
e
 
→
 
t
i
m
e
l
i
n
e
 
c
a
c
h
e
 
(
R
e
d
i
s
)
 
o
f
 
e
a
c
h
 
f
o
l
l
o
w
e
r
.
"
,


 
 
 
 
 
 
"
R
e
a
d
 
p
a
t
h
:
 
c
l
i
e
n
t
 
→
 
t
i
m
e
l
i
n
e
 
A
P
I
 
→
 
R
e
d
i
s
 
l
o
o
k
u
p
 
→
 
h
y
d
r
a
t
e
 
t
w
e
e
t
 
b
o
d
i
e
s
 
f
r
o
m
 
t
w
e
e
t
 
s
t
o
r
e
.
"
,


 
 
 
 
 
 
"
H
y
b
r
i
d
 
f
a
n
-
o
u
t
:
 
p
u
s
h
 
f
o
r
 
n
o
r
m
a
l
 
u
s
e
r
s
,
 
p
u
l
l
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
 
a
t
 
r
e
a
d
 
t
i
m
e
.
"
,


 
 
 
 
]
,


 
 
}
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
 
F
r
a
m
e
w
o
r
k
A
p
p
l
i
e
d
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
T
h
e
 
4
-
s
t
e
p
 
f
r
a
m
e
w
o
r
k
,
 
a
p
p
l
i
e
d
 
t
o
 
T
w
i
t
t
e
r
 
f
e
e
d
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
i
n
t
e
r
e
s
t
i
n
g
 
p
a
r
t
 
o
f
 
T
w
i
t
t
e
r
 
i
s
n
&
r
s
q
u
o
;
t
 
s
t
o
r
i
n
g
 
t
w
e
e
t
s
 
—
 
i
t
&
r
s
q
u
o
;
s
 
t
h
e
 
t
i
m
e
l
i
n
e
 
a
s
s
e
m
b
l
y
.


 
 
 
 
 
 
 
 
H
e
r
e
&
r
s
q
u
o
;
s
 
t
h
e
 
f
r
a
m
e
w
o
r
k
 
r
u
n
 
e
n
d
-
t
o
-
e
n
d
.


 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
1
 
}
 
}
 
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
g
r
i
d
 
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
1
 
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
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
T
E
P
S
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
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
2
 
}
,
 
v
i
s
i
b
l
e
:
 
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
,
 
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
:
 
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
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
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
s
.
c
o
l
o
r
}
5
5
`
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
 
1
0
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
 
`
$
{
s
.
c
o
l
o
r
}
0
8
`
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
s
.
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
4
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
k
.
t
o
U
p
p
e
r
C
a
s
e
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
0
,
 
p
a
d
d
i
n
g
:
 
0
,
 
l
i
s
t
S
t
y
l
e
:
 
"
n
o
n
e
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
i
t
e
m
s
.
m
a
p
(
(
i
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
8
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
s
.
c
o
l
o
r
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
 
}
}
>
·
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
i
t
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
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
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
)
}


 
 
 
 
 
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
H
y
b
r
i
d
 
f
a
n
-
o
u
t
 
a
n
i
m
a
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
A
u
t
h
o
r
 
=
 
{
 
i
d
:
 
s
t
r
i
n
g
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
;
 
f
o
l
l
o
w
e
r
s
:
 
n
u
m
b
e
r
;
 
i
s
C
e
l
e
b
:
 
b
o
o
l
e
a
n
;
 
c
o
l
o
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
 
A
U
T
H
O
R
S
:
 
A
u
t
h
o
r
[
]
 
=
 
[


 
 
{
 
i
d
:
 
"
a
s
h
a
"
,
 
l
a
b
e
l
:
 
"
A
s
h
a
 
·
 
2
4
0
 
f
o
l
l
o
w
e
r
s
"
,
 
f
o
l
l
o
w
e
r
s
:
 
2
4
0
,
 
i
s
C
e
l
e
b
:
 
f
a
l
s
e
,
 
c
o
l
o
r
:
 
S
D
 
}
,


 
 
{
 
i
d
:
 
"
r
a
h
u
l
"
,
 
l
a
b
e
l
:
 
"
R
a
h
u
l
 
·
 
8
k
 
f
o
l
l
o
w
e
r
s
"
,
 
f
o
l
l
o
w
e
r
s
:
 
8
0
0
0
,
 
i
s
C
e
l
e
b
:
 
f
a
l
s
e
,
 
c
o
l
o
r
:
 
S
D
 
}
,


 
 
{
 
i
d
:
 
"
i
s
h
a
a
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
I
s
h
a
a
n
 
·
 
2
.
5
M
 
f
o
l
l
o
w
e
r
s
"
,
 
f
o
l
l
o
w
e
r
s
:
 
2
_
5
0
0
_
0
0
0
,
 
i
s
C
e
l
e
b
:
 
t
r
u
e
,
 
c
o
l
o
r
:
 
W
A
R
N
 
}
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
 
F
a
n
o
u
t
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
a
u
t
h
o
r
,
 
s
e
t
A
u
t
h
o
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
<
A
u
t
h
o
r
>
(
A
U
T
H
O
R
S
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
 
[
p
o
s
t
e
d
,
 
s
e
t
P
o
s
t
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
s
t
a
t
s
,
 
s
e
t
S
t
a
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
(
{
 
w
r
i
t
e
s
:
 
0
,
 
p
u
l
l
P
a
t
h
s
:
 
0
 
}
)
;




 
 
c
o
n
s
t
 
p
o
s
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
P
o
s
t
e
d
(
t
r
u
e
)
;


 
 
 
 
i
f
 
(
a
u
t
h
o
r
.
i
s
C
e
l
e
b
)
 
{


 
 
 
 
 
 
s
e
t
S
t
a
t
s
(
(
s
)
 
=
>
 
(
{
 
.
.
.
s
,
 
p
u
l
l
P
a
t
h
s
:
 
s
.
p
u
l
l
P
a
t
h
s
 
+
 
1
 
}
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
t
a
t
s
(
(
s
)
 
=
>
 
(
{
 
.
.
.
s
,
 
w
r
i
t
e
s
:
 
s
.
w
r
i
t
e
s
 
+
 
a
u
t
h
o
r
.
f
o
l
l
o
w
e
r
s
 
}
)
)
;


 
 
 
 
}


 
 
 
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
P
o
s
t
e
d
(
f
a
l
s
e
)
,
 
2
5
0
0
)
;


 
 
}
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{
 
s
e
t
S
t
a
t
s
(
{
 
w
r
i
t
e
s
:
 
0
,
 
p
u
l
l
P
a
t
h
s
:
 
0
 
}
)
;
 
s
e
t
P
o
s
t
e
d
(
f
a
l
s
e
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
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
W
a
t
c
h
 
h
y
b
r
i
d
 
f
a
n
-
o
u
t
 
b
e
h
a
v
e
 
f
o
r
 
n
o
r
m
a
l
 
v
s
 
c
e
l
e
b
r
i
t
y
 
a
u
t
h
o
r
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
P
i
c
k
 
a
n
 
a
u
t
h
o
r
 
a
n
d
 
p
o
s
t
.
 
B
e
l
o
w
 
1
M
 
f
o
l
l
o
w
e
r
s
,
 
t
h
e
 
s
y
s
t
e
m
 
p
r
e
-
f
a
n
s
-
o
u
t
 
—
 
e
v
e
r
y
 
f
o
l
l
o
w
e
r
&
r
s
q
u
o
;
s


 
 
 
 
 
 
 
 
t
i
m
e
l
i
n
e
 
c
a
c
h
e
 
g
e
t
s
 
t
h
e
 
t
w
e
e
t
 
I
D
 
w
r
i
t
t
e
n
.
 
A
t
 
1
M
+
,
 
t
h
e
 
s
y
s
t
e
m
 
s
k
i
p
s
 
t
h
e
 
f
a
n
-
o
u
t
 
a
n
d
 
l
e
t
s


 
 
 
 
 
 
 
 
f
o
l
l
o
w
e
r
s
&
r
s
q
u
o
;
 
t
i
m
e
l
i
n
e
 
r
e
a
d
s
 
m
e
r
g
e
 
c
e
l
e
b
r
i
t
y
 
t
w
e
e
t
s
 
a
t
 
r
e
a
d
 
t
i
m
e
.


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
a
u
t
h
o
r
:
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
A
U
T
H
O
R
S
.
m
a
p
(
(
a
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
a
u
t
h
o
r
.
i
d
 
=
=
=
 
a
.
i
d
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
a
.
i
d
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
 
s
e
t
A
u
t
h
o
r
(
a
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
p
o
s
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
2
p
x
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
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
p
o
s
t
e
d
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
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
a
c
t
i
v
e
 
?
 
a
.
c
o
l
o
r
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
a
c
t
i
v
e
 
?
 
`
$
{
a
.
c
o
l
o
r
}
1
8
`
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
a
.
c
o
l
o
r
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
p
o
s
t
e
d
 
?
 
0
.
6
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
l
a
b
e
l
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




 
 
 
 
 
 
<
d
i
v
 
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
 
"
#
0
b
1
2
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
R
a
d
i
u
s
:
 
1
2
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
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
p
a
d
d
i
n
g
:
 
2
2
 
}
}
>


 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
7
2
0
 
3
2
0
"
 
w
i
d
t
h
=
"
1
0
0
%
"
 
s
t
y
l
e
=
{
{
 
m
a
x
W
i
d
t
h
:
 
7
6
0
,
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
u
t
h
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
g
 
t
r
a
n
s
f
o
r
m
=
"
t
r
a
n
s
l
a
t
e
(
4
0
,
 
1
3
0
)
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
r
e
c
t
 
w
i
d
t
h
=
{
1
4
0
}
 
h
e
i
g
h
t
=
{
6
0
}
 
r
x
=
{
1
0
}
 
f
i
l
l
=
{
`
$
{
a
u
t
h
o
r
.
c
o
l
o
r
}
2
2
`
}
 
s
t
r
o
k
e
=
{
a
u
t
h
o
r
.
c
o
l
o
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
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
 
s
c
a
l
e
:
 
p
o
s
t
e
d
 
?
 
[
1
,
 
1
.
0
5
,
 
1
]
 
:
 
1
 
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
5
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
7
0
}
 
y
=
{
2
6
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
{
1
2
}
 
f
o
n
t
W
e
i
g
h
t
=
{
8
0
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
u
t
h
o
r
.
i
d
.
t
o
U
p
p
e
r
C
a
s
e
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
7
0
}
 
y
=
{
4
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
a
u
t
h
o
r
.
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
{
9
.
5
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
u
t
h
o
r
.
f
o
l
l
o
w
e
r
s
.
t
o
L
o
c
a
l
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
 
f
o
l
l
o
w
e
r
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
f
a
n
-
o
u
t
 
s
e
r
v
i
c
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
2
5
0
}
 
y
=
{
5
0
}
 
w
=
{
1
4
0
}
 
h
=
{
5
0
}
 
l
a
b
e
l
=
"
F
a
n
-
o
u
t
 
s
e
r
v
i
c
e
"
 
s
u
b
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
"
s
k
i
p
p
e
d
 
(
c
e
l
e
b
)
"
 
:
 
"
w
r
i
t
e
s
 
i
d
s
"
}
 
c
o
l
o
r
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
N
E
U
T
R
A
L
 
:
 
S
D
}
 
p
u
l
s
e
=
{
p
o
s
t
e
d
 
&
&
 
!
a
u
t
h
o
r
.
i
s
C
e
l
e
b
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
t
i
m
e
l
i
n
e
 
c
a
c
h
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
5
0
0
}
 
y
=
{
5
0
}
 
w
=
{
1
8
0
}
 
h
=
{
5
0
}
 
l
a
b
e
l
=
"
T
i
m
e
l
i
n
e
 
c
a
c
h
e
s
 
(
R
e
d
i
s
)
"
 
s
u
b
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
"
n
o
 
c
e
l
e
b
 
w
r
i
t
e
s
"
 
:
 
`
$
{
a
u
t
h
o
r
.
f
o
l
l
o
w
e
r
s
.
t
o
L
o
c
a
l
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
 
u
p
d
a
t
e
d
`
}
 
c
o
l
o
r
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
N
E
U
T
R
A
L
 
:
 
S
D
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
t
w
e
e
t
 
s
t
o
r
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
2
5
0
}
 
y
=
{
2
1
0
}
 
w
=
{
1
4
0
}
 
h
=
{
5
0
}
 
l
a
b
e
l
=
"
T
w
e
e
t
 
s
t
o
r
e
"
 
s
u
b
=
"
t
w
e
e
t
 
b
o
d
y
 
s
a
v
e
d
"
 
c
o
l
o
r
=
{
S
D
}
 
p
u
l
s
e
=
{
p
o
s
t
e
d
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
r
e
a
d
 
m
e
r
g
e
 
f
o
r
 
c
e
l
e
b
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
5
0
0
}
 
y
=
{
2
1
0
}
 
w
=
{
1
8
0
}
 
h
=
{
5
0
}
 
l
a
b
e
l
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
"
R
e
a
d
 
m
e
r
g
e
s
 
i
n
 
c
e
l
e
b
 
t
w
e
e
t
"
 
:
 
"
R
e
a
d
 
r
e
t
u
r
n
s
 
p
r
e
-
b
u
i
l
t
"
}
 
s
u
b
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
"
e
x
t
r
a
 
h
o
p
 
o
n
 
e
v
e
r
y
 
r
e
a
d
"
 
:
 
"
O
(
1
)
 
c
a
c
h
e
 
l
o
o
k
u
p
"
}
 
c
o
l
o
r
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
P
U
R
P
L
E
 
:
 
S
D
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
d
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
1
8
0
}
 
y
1
=
{
1
5
0
}
 
x
2
=
{
2
5
0
}
 
y
2
=
{
7
5
}
 
s
t
r
o
k
e
=
{
N
E
U
T
R
A
L
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
3
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
"
3
 
4
"
 
:
 
"
0
"
}
 
o
p
a
c
i
t
y
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
0
.
4
 
:
 
1
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
1
8
0
}
 
y
1
=
{
1
7
0
}
 
x
2
=
{
2
5
0
}
 
y
2
=
{
2
3
5
}
 
s
t
r
o
k
e
=
{
N
E
U
T
R
A
L
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
3
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
3
9
0
}
 
y
1
=
{
7
5
}
 
x
2
=
{
5
0
0
}
 
y
2
=
{
7
5
}
 
s
t
r
o
k
e
=
{
N
E
U
T
R
A
L
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
3
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
"
3
 
4
"
 
:
 
"
0
"
}
 
o
p
a
c
i
t
y
=
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
0
.
4
 
:
 
1
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
3
9
0
}
 
y
1
=
{
2
3
5
}
 
x
2
=
{
5
0
0
}
 
y
2
=
{
2
3
5
}
 
s
t
r
o
k
e
=
{
N
E
U
T
R
A
L
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
3
}
 
/
>


 
 
 
 
 
 
 
 
 
 
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
&
&
 
<
l
i
n
e
 
x
1
=
{
5
9
0
}
 
y
1
=
{
2
1
0
}
 
x
2
=
{
5
9
0
}
 
y
2
=
{
1
0
0
}
 
s
t
r
o
k
e
=
{
P
U
R
P
L
E
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
3
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
4
 
4
"
 
/
>
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
p
a
c
k
e
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
o
s
t
e
d
 
&
&
 
!
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
1
8
0
,
 
c
y
:
 
1
5
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
 
c
x
:
 
[
1
8
0
,
 
3
2
0
,
 
5
9
0
]
,
 
c
y
:
 
[
1
5
0
,
 
7
5
,
 
7
5
]
 
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
 
1
.
6
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
o
s
t
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
1
8
0
,
 
c
y
:
 
1
7
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
 
c
x
:
 
[
1
8
0
,
 
3
2
0
,
 
5
9
0
]
,
 
c
y
:
 
[
1
7
0
,
 
2
3
5
,
 
2
3
5
]
 
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
 
1
.
4
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
,
 
d
e
l
a
y
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
<
/
s
v
g
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
 
g
a
p
-
2
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
c
u
m
u
l
a
t
i
v
e
 
f
a
n
-
o
u
t
 
w
r
i
t
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
s
t
a
t
s
.
w
r
i
t
e
s
.
t
o
L
o
c
a
l
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
 
c
o
l
o
r
=
{
s
t
a
t
s
.
w
r
i
t
e
s
 
>
 
1
_
0
0
0
_
0
0
0
 
?
 
W
A
R
N
 
:
 
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
c
e
l
e
b
r
i
t
y
 
p
u
l
l
 
p
a
t
h
s
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
s
t
a
t
s
.
p
u
l
l
P
a
t
h
s
)
}
 
c
o
l
o
r
=
{
s
t
a
t
s
.
p
u
l
l
P
a
t
h
s
 
>
 
0
 
?
 
P
U
R
P
L
E
 
:
 
N
E
U
T
R
A
L
}
 
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
t
-
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


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
p
o
s
t
}
 
d
i
s
a
b
l
e
d
=
{
p
o
s
t
e
d
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
,
 
p
o
s
t
e
d
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
n
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


 
 
 
 
 
 
 
 
 
 
 
 
{
p
o
s
t
e
d
 
?
 
"
d
e
l
i
v
e
r
i
n
g
…
"
 
:
 
"
p
o
s
t
 
t
w
e
e
t
"
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
N
E
U
T
R
A
L
,
 
f
a
l
s
e
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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




 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
a
u
t
h
o
r
.
i
d
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
 
6
 
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


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
-
6
 
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
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
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
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
 
6
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
a
u
t
h
o
r
.
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b
 
?
 
"
C
E
L
E
B
R
I
T
Y
"
 
:
 
"
N
O
R
M
A
L
 
U
S
E
R
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
u
t
h
o
r
.
i
s
C
e
l
e
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
2
.
5
M
 
f
o
l
l
o
w
e
r
 
f
a
n
-
o
u
t
 
w
o
u
l
d
 
s
a
t
u
r
a
t
e
 
t
h
e
 
w
r
i
t
e
 
p
a
t
h
.
 
S
k
i
p
 
i
t
.
 
F
o
l
l
o
w
e
r
s
'
 
t
i
m
e
l
i
n
e
 
r
e
a
d
s
 
p
u
l
l
 
t
h
i
s
 
c
e
l
e
b
r
i
t
y
'
s
 
r
e
c
e
n
t
 
t
w
e
e
t
s
 
a
t
 
m
e
r
g
e
 
t
i
m
e
 
a
n
d
 
s
t
i
t
c
h
 
t
h
e
m
 
i
n
t
o
 
t
h
e
 
p
r
e
-
b
u
i
l
t
 
t
i
m
e
l
i
n
e
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
`
$
{
a
u
t
h
o
r
.
f
o
l
l
o
w
e
r
s
.
t
o
L
o
c
a
l
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
 
t
i
m
e
l
i
n
e
 
c
a
c
h
e
 
w
r
i
t
e
s
 
—
 
f
a
s
t
,
 
p
a
r
a
l
l
e
l
,
 
c
o
m
p
l
e
t
e
 
i
n
 
w
e
l
l
 
u
n
d
e
r
 
a
 
s
e
c
o
n
d
.
 
F
o
l
l
o
w
e
r
s
 
s
e
e
 
t
h
e
 
t
w
e
e
t
 
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
 
o
n
 
n
e
x
t
 
r
e
f
r
e
s
h
.
`
}


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
 
N
o
d
e
B
o
x
(
{
 
x
,
 
y
,
 
w
,
 
h
,
 
l
a
b
e
l
,
 
s
u
b
,
 
c
o
l
o
r
,
 
p
u
l
s
e
 
}
:
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
;
 
w
:
 
n
u
m
b
e
r
;
 
h
:
 
n
u
m
b
e
r
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
;
 
s
u
b
:
 
s
t
r
i
n
g
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
p
u
l
s
e
?
:
 
b
o
o
l
e
a
n
 
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
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
{
p
u
l
s
e
 
&
&
 
(


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
r
e
c
t


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
w
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
h
}


 
 
 
 
 
 
 
 
 
 
r
x
=
{
8
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
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
2
5
,
 
s
c
a
l
e
:
 
1
 
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
 
0
,
 
s
c
a
l
e
:
 
1
.
1
5
 
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
 
1
.
4
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
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


 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
{
w
}
 
h
e
i
g
h
t
=
{
h
}
 
r
x
=
{
8
}
 
f
i
l
l
=
{
`
$
{
c
o
l
o
r
}
2
2
`
}
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
{
2
0
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
{
1
1
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
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
t
e
x
t
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
{
3
6
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
{
9
.
5
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
{
s
u
b
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
<
/
g
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
t
a
t
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
 
c
o
l
o
r
 
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
;
 
c
o
l
o
r
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
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
 
8
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
}
5
5
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
 
`
$
{
c
o
l
o
r
}
1
0
`
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
 
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
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
 
k
e
y
=
{
v
a
l
u
e
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
 
4
 
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
 
e
x
i
t
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
 
-
4
 
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
2
 
}
}
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
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


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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




f
u
n
c
t
i
o
n
 
b
t
n
(
c
o
l
o
r
:
 
s
t
r
i
n
g
,
 
d
i
s
a
b
l
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
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
{


 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
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
 
6
,


 
 
 
 
c
u
r
s
o
r
:
 
d
i
s
a
b
l
e
d
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
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
 
`
$
{
c
o
l
o
r
}
1
8
`
,
 
c
o
l
o
r
,


 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
o
p
a
c
i
t
y
:
 
d
i
s
a
b
l
e
d
 
?
 
0
.
6
 
:
 
1
,


 
 
}
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
T
r
a
d
e
o
f
f
s
 
a
n
d
 
w
h
a
t
 
w
e
 
l
e
f
t
 
o
u
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
T
R
A
D
E
S
 
=
 
[


 
 
{
 
k
:
 
"
W
h
y
 
h
y
b
r
i
d
?
"
,
 
v
:
 
"
P
u
r
e
 
p
u
s
h
 
b
r
e
a
k
s
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
.
 
P
u
r
e
 
p
u
l
l
 
b
r
e
a
k
s
 
f
o
r
 
a
c
t
i
v
e
 
u
s
e
r
s
 
w
i
t
h
 
t
h
o
u
s
a
n
d
s
 
o
f
 
f
o
l
l
o
w
e
e
s
.
 
H
y
b
r
i
d
 
c
o
m
b
i
n
e
s
 
t
h
e
 
w
i
n
s
.
"
 
}
,


 
 
{
 
k
:
 
"
S
t
o
r
a
g
e
 
c
o
s
t
 
o
f
 
p
r
e
-
b
u
i
l
t
 
t
i
m
e
l
i
n
e
s
"
,
 
v
:
 
"
2
0
0
M
 
u
s
e
r
s
 
×
 
8
0
0
 
t
w
e
e
t
 
I
D
s
 
×
 
8
 
b
y
t
e
s
 
≈
 
1
.
3
 
T
B
 
i
n
 
R
e
d
i
s
.
 
B
o
u
n
d
e
d
;
 
o
n
l
y
 
I
D
s
 
a
r
e
 
s
t
o
r
e
d
,
 
b
o
d
i
e
s
 
f
e
t
c
h
e
d
 
l
a
z
i
l
y
.
"
 
}
,


 
 
{
 
k
:
 
"
W
h
a
t
 
a
b
o
u
t
 
r
a
n
k
i
n
g
?
"
,
 
v
:
 
"
T
h
i
s
 
i
s
 
t
h
e
 
c
h
r
o
n
o
l
o
g
i
c
a
l
 
'
f
e
e
d
'
 
d
e
s
i
g
n
.
 
R
e
a
l
 
T
w
i
t
t
e
r
 
/
 
F
a
c
e
b
o
o
k
 
l
a
y
e
r
 
M
L
 
r
a
n
k
e
r
s
 
o
n
 
t
o
p
 
o
f
 
t
h
e
 
c
a
n
d
i
d
a
t
e
 
s
e
t
,
 
w
h
i
c
h
 
i
s
 
i
t
s
e
l
f
 
p
r
o
d
u
c
e
d
 
b
y
 
t
h
e
 
m
e
r
g
e
 
a
b
o
v
e
.
"
 
}
,


 
 
{
 
k
:
 
"
M
i
s
s
i
n
g
:
 
e
d
i
t
s
,
 
r
e
t
w
e
e
t
s
"
,
 
v
:
 
"
R
e
t
w
e
e
t
s
 
a
r
e
 
t
y
p
i
c
a
l
l
y
 
j
u
s
t
 
a
 
p
o
i
n
t
e
r
;
 
e
d
i
t
s
 
a
r
e
 
v
e
r
s
i
o
n
e
d
 
t
w
e
e
t
 
r
o
w
s
.
 
B
o
t
h
 
f
i
t
 
t
h
e
 
s
a
m
e
 
f
a
n
-
o
u
t
 
p
a
t
h
.
"
 
}
,


 
 
{
 
k
:
 
"
M
i
s
s
i
n
g
:
 
d
e
l
e
t
e
s
"
,
 
v
:
 
"
T
w
e
e
t
 
d
e
l
e
t
e
 
=
 
m
a
r
k
 
t
w
e
e
t
 
a
s
 
d
e
l
e
t
e
d
;
 
t
i
m
e
l
i
n
e
 
r
e
a
d
s
 
f
i
l
t
e
r
 
o
u
t
 
d
e
l
e
t
e
d
 
I
D
s
 
a
t
 
h
y
d
r
a
t
e
 
t
i
m
e
.
 
C
l
e
a
n
u
p
 
i
s
 
a
s
y
n
c
.
"
 
}
,


 
 
{
 
k
:
 
"
M
i
s
s
i
n
g
:
 
m
e
n
t
i
o
n
s
 
/
 
s
e
a
r
c
h
"
,
 
v
:
 
"
S
e
p
a
r
a
t
e
 
i
n
v
e
r
t
e
d
-
i
n
d
e
x
 
p
i
p
e
l
i
n
e
 
(
L
7
.
1
)
 
c
o
n
s
u
m
e
d
 
v
i
a
 
C
D
C
 
f
r
o
m
 
t
h
e
 
t
w
e
e
t
 
s
t
o
r
e
.
"
 
}
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
 
T
r
a
d
e
o
f
f
s
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
T
r
a
d
e
o
f
f
s
 
a
n
d
 
w
h
a
t
 
a
n
 
i
n
t
e
r
v
i
e
w
 
a
n
s
w
e
r
 
s
h
o
u
l
d
 
m
e
n
t
i
o
n
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
S
e
n
i
o
r
 
i
n
t
e
r
v
i
e
w
e
r
s
 
c
a
r
e
 
l
e
s
s
 
a
b
o
u
t
 
g
e
t
t
i
n
g
 
t
h
e
 
d
i
a
g
r
a
m
 
r
i
g
h
t
 
a
n
d
 
m
o
r
e
 
a
b
o
u
t
 
w
h
e
t
h
e
r
 
y
o
u


 
 
 
 
 
 
 
 
r
e
c
o
g
n
i
z
e
 
w
h
a
t
 
y
o
u
 
s
i
m
p
l
i
f
i
e
d
.
 
S
i
x
 
t
h
i
n
g
s
 
t
o
 
m
e
n
t
i
o
n
 
o
u
t
 
l
o
u
d
.


 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
6
 
}
 
}
 
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
g
r
i
d
 
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
1
 
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
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
T
R
A
D
E
S
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
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
 
8
 
}
,
 
v
i
s
i
b
l
e
:
 
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
,
 
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
:
 
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
4
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
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
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
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
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
k
.
t
o
U
p
p
e
r
C
a
s
e
(
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
t
.
v
}
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
)
}


 
 
 
 
 
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
D
_
L
8
_
T
w
i
t
t
e
r
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
f
r
a
m
e
w
o
r
k
"
,
 
l
a
b
e
l
:
 
"
F
r
a
m
e
w
o
r
k
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
F
r
a
m
e
w
o
r
k
A
p
p
l
i
e
d
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
f
a
n
o
u
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
H
y
b
r
i
d
 
F
a
n
-
o
u
t
"
,
 
i
c
o
n
:
 
<
M
e
g
a
p
h
o
n
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
F
a
n
o
u
t
D
e
m
o
 
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
a
d
e
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
T
r
a
d
e
o
f
f
s
"
,
 
i
c
o
n
:
 
<
G
l
o
b
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
a
d
e
o
f
f
s
 
/
>
 
}
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
 
E
n
g
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
P
u
r
e
 
p
u
s
h
 
f
a
i
l
s
 
f
o
r
 
a
 
5
M
-
f
o
l
l
o
w
e
r
 
c
e
l
e
b
r
i
t
y
.
 
T
h
e
 
h
y
b
r
i
d
 
f
i
x
 
i
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
S
k
i
p
 
t
h
e
 
c
e
l
e
b
r
i
t
y
'
s
 
t
w
e
e
t
s
.
"
,


 
 
 
 
 
 
 
 
"
D
o
n
'
t
 
p
r
e
-
f
a
n
-
o
u
t
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
;
 
h
a
v
e
 
f
o
l
l
o
w
e
r
s
'
 
t
i
m
e
l
i
n
e
 
r
e
a
d
s
 
m
e
r
g
e
 
c
e
l
e
b
r
i
t
y
 
t
w
e
e
t
s
 
a
t
 
r
e
a
d
 
t
i
m
e
.
"
,


 
 
 
 
 
 
 
 
"
A
d
d
 
m
o
r
e
 
r
e
p
l
i
c
a
s
.
"
,


 
 
 
 
 
 
 
 
"
S
w
i
t
c
h
 
t
o
 
p
u
l
l
 
e
n
t
i
r
e
l
y
.
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
5
M
 
t
i
m
e
l
i
n
e
 
w
r
i
t
e
s
 
p
e
r
 
c
e
l
e
b
r
i
t
y
 
t
w
e
e
t
 
=
 
b
a
c
k
e
d
-
u
p
 
f
a
n
-
o
u
t
 
s
e
r
v
i
c
e
.
 
P
u
l
l
-
o
n
-
r
e
a
d
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
 
a
d
d
s
 
a
 
s
m
a
l
l
 
e
x
t
r
a
 
h
o
p
 
p
e
r
 
r
e
a
d
 
b
u
t
 
b
o
u
n
d
s
 
t
h
e
 
w
r
i
t
e
 
a
m
p
l
i
f
i
c
a
t
i
o
n
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
y
 
s
t
o
r
e
 
t
w
e
e
t
 
I
D
s
 
(
n
o
t
 
b
o
d
i
e
s
)
 
i
n
 
R
e
d
i
s
 
t
i
m
e
l
i
n
e
 
c
a
c
h
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
D
e
c
o
r
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
I
D
s
 
a
r
e
 
t
i
n
y
 
(
8
 
b
y
t
e
s
 
v
s
 
~
1
K
B
)
.
 
2
0
0
M
 
u
s
e
r
s
 
×
 
8
0
0
 
I
D
s
 
×
 
8
 
b
y
t
e
s
 
≈
 
1
.
3
 
T
B
;
 
b
o
d
i
e
s
 
w
o
u
l
d
 
b
e
 
~
1
5
0
x
 
b
i
g
g
e
r
.
"
,


 
 
 
 
 
 
 
 
"
R
e
q
u
i
r
e
d
 
b
y
 
R
e
d
i
s
.
"
,


 
 
 
 
 
 
 
 
"
F
a
s
t
e
r
 
r
a
n
d
o
m
.
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
t
o
r
i
n
g
 
o
n
l
y
 
t
h
e
 
i
n
d
e
x
 
k
e
e
p
s
 
R
e
d
i
s
 
l
e
a
n
.
 
T
w
e
e
t
 
b
o
d
i
e
s
 
a
r
e
 
f
e
t
c
h
e
d
 
i
n
 
b
a
t
c
h
 
f
r
o
m
 
t
h
e
 
t
w
e
e
t
 
s
t
o
r
e
 
a
t
 
h
y
d
r
a
t
e
 
t
i
m
e
,
 
s
o
 
t
h
e
 
r
e
a
d
 
s
t
i
l
l
 
c
o
m
p
l
e
t
e
s
 
i
n
 
a
 
s
i
n
g
l
e
 
r
o
u
n
d
 
t
r
i
p
 
p
e
r
 
p
a
g
e
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
n
 
a
c
t
i
v
e
 
u
s
e
r
 
f
o
l
l
o
w
s
 
5
,
0
0
0
 
a
c
c
o
u
n
t
s
.
 
W
i
t
h
 
p
u
r
e
 
p
u
l
l
,
 
w
h
a
t
'
s
 
t
h
e
 
r
e
a
d
-
t
i
m
e
 
c
o
s
t
 
o
f
 
o
p
e
n
i
n
g
 
t
h
e
i
r
 
f
e
e
d
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
F
r
e
e
.
"
,


 
 
 
 
 
 
 
 
"
U
p
 
t
o
 
5
,
0
0
0
 
q
u
e
r
i
e
s
 
(
o
n
e
 
p
e
r
 
f
o
l
l
o
w
e
e
)
,
 
t
h
e
n
 
a
 
m
e
r
g
e
 
—
 
s
l
o
w
 
a
t
 
s
c
a
l
e
.
"
,


 
 
 
 
 
 
 
 
"
O
n
e
 
q
u
e
r
y
.
"
,


 
 
 
 
 
 
 
 
"
T
w
o
 
q
u
e
r
i
e
s
.
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
P
u
l
l
 
p
u
s
h
e
s
 
t
h
e
 
c
o
s
t
 
t
o
 
r
e
a
d
 
t
i
m
e
.
 
W
i
t
h
 
m
a
n
y
 
f
o
l
l
o
w
e
e
s
 
a
n
d
 
f
r
e
q
u
e
n
t
 
r
e
a
d
s
,
 
t
h
i
s
 
b
e
c
o
m
e
s
 
p
r
o
h
i
b
i
t
i
v
e
.
 
H
y
b
r
i
d
 
a
v
o
i
d
s
 
t
h
i
s
 
b
y
 
p
r
e
-
f
a
n
n
i
n
g
-
o
u
t
 
f
o
r
 
n
o
n
-
c
e
l
e
b
 
f
o
l
l
o
w
e
e
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
a
t
'
s
 
t
h
e
 
r
o
u
g
h
 
r
e
a
d
 
R
P
S
 
f
o
r
 
T
w
i
t
t
e
r
 
t
i
m
e
l
i
n
e
s
 
b
a
s
e
d
 
o
n
 
t
h
e
 
e
s
t
i
m
a
t
i
o
n
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
k
"
,
 
"
1
1
5
k
 
a
v
e
r
a
g
e
 
—
 
2
0
0
M
 
D
A
U
 
×
 
5
0
 
o
p
e
n
s
/
d
a
y
 
/
 
8
6
,
4
0
0
 
s
e
c
 
≈
 
1
1
5
k
/
s
e
c
"
,
 
"
1
M
"
,
 
"
1
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
2
0
0
M
 
×
 
5
0
 
/
 
8
6
,
4
0
0
 
≈
 
1
1
5
k
 
R
P
S
.
 
P
e
a
k
 
i
s
 
5
x
 
—
 
~
5
7
5
k
.
 
T
h
i
s
 
i
s
 
e
x
a
c
t
l
y
 
w
h
y
 
t
h
e
 
t
i
m
e
l
i
n
e
 
s
e
r
v
i
c
e
 
m
u
s
t
 
b
e
 
b
a
c
k
e
d
 
b
y
 
a
 
f
a
s
t
 
c
a
c
h
e
 
(
R
e
d
i
s
)
,
 
n
o
t
 
t
h
e
 
t
w
e
e
t
 
D
B
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
E
n
g
i
n
e
e
r
i
n
g
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
D
e
s
i
g
n
 
T
w
i
t
t
e
r
 
F
e
e
d
"


 
 
 
 
 
 
l
e
v
e
l
=
{
8
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
2
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
T
h
e
 
c
l
a
s
s
i
c
 
'
d
e
s
i
g
n
 
a
 
s
o
c
i
a
l
 
f
e
e
d
'
 
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
,
 
e
n
d
-
t
o
-
e
n
d
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


